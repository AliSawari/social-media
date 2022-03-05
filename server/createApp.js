const express = require("express");
const config = require("config");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./modules/user/user.routes");
const storyRoutes = require("./modules/story/story.routes");
const postRoutes = require("./modules/post/post.routes");
const followRoutes = require("./modules/follow/follow.routes");
const chatRoutes = require("./modules/chat/chat.routes");
const notificationRoutes = require("./modules/notification/notification.routes");
const converstationRoutes = require("./modules/conversation/conversation.routes");
const reportRoutes = require("./modules/reports/report.routes");
const saveRoutes = require("./modules/saves/save.routes");
const commentRoutes = require("./modules/comments/comment.routes");
const backgroundRoutes = require("./modules/backgrounds/background.routes");
const interestsRoutes = require("./modules/interests/interest.routes");
const moment = require("moment");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const http = require("http");
const Converstation = require("./modules/conversation/conversation.model")
const { Server } = require("socket.io");

const ChatModel = require("./modules/chat/chat.model");
const UserModel = require("./modules/user/user.model");
const PostModel = require("./modules/post/post.model");




function createApp() {

  const app = express();
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });




  io.on("connection", (socket) => {
    socket.on("user:connect", ({ id }) => {
      socket.join(id);
    });

    socket.on("send message", async ({ message, sender, receiver }) => {

      const timestamp = moment.now();

      const conversation = await ChatModel.findOne({ $or: [{ sender: receiver, receiver: sender }, { sender: sender, receiver: receiver }] });
      let chatOptions = {};
      if (conversation) {
        chatOptions.data = await ChatModel.findOneAndUpdate({ _id: conversation._id }, { lastMessage: message, $push: { messages: { sender, message, timestamp } } }, { new: true }).populate("sender", "profile fullname").populate("receiver", "profile  fullname");
        chatOptions.type = "update";
      } else {
        const newChat = new ChatModel({
          sender,
          receiver,
          lastMessage: message,
          messages: [
            { sender, message, timestamp }
          ]
        });
        const { _id } = await newChat.save();
        chatOptions.data = await ChatModel.findById(_id).populate("sender", "profile fullname").populate("receiver", "profile  fullname");
        chatOptions.type = "new";
      }


      const userSender = await UserModel.findById(sender);
      socket.to(receiver).emit("user:notification", { message: `you have new message by ${userSender.fullname}` });
      socket.to([receiver, sender]).emit("send message", chatOptions);
    });



    socket.on("post:liked", async ({ uid, id }) => {
      const liker = await UserModel.findOne({ _id: uid });
      const postUser = await PostModel.findOne({ _id: id });
      const userId = postUser.user.toHexString()
      socket.to(userId).emit("user:notification", { message: `${liker.fullname} like your post`, sender: liker })
    });



    socket.on("post:comment", async ({ id, user }) => {
      const post = await PostModel.findOne({ _id: id });
      const userComment = await UserModel.findById(user);
      const userId = post.user.toHexString();
      socket.to(userId).emit("user:notification", { message: `${userComment.fullname} commented in your post` })
    });

    socket.on("message:seen", async ({ id, chatId, sender }) => {
      await ChatModel.updateOne({ _id: chatId, "messages._id": id }, { $set: { "messages.$.isSeen": true } });
      socket.to(sender).emit("client-message:seen", { chatId, id });
    });
  });

  app.use("/public", express.static("public"));

  app.use(fileUpload());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan("dev"));



  app.use("/api/v1/users/", userRoutes);
  app.use("/api/v1/stories/", storyRoutes);
  app.use("/api/v1/posts/", postRoutes);
  app.use("/api/v1/follow/", followRoutes);
  app.use("/api/v1/chat/", chatRoutes);
  app.use("/api/v1/converstation/", converstationRoutes);
  app.use("/api/v1/notifications/", notificationRoutes);
  app.use("/api/v1/report/", reportRoutes);
  app.use("/api/v1/save/", saveRoutes);
  app.use("/api/v1/comments/", commentRoutes);
  app.use("/api/v1/backgrounds/", backgroundRoutes);
  app.use("/api/v1/interests/", interestsRoutes);

  server.listen(config.get("PORT") || 4000, () => {
    console.log(`server running on port ${config.get("PORT") || 4000}`);
  });
}

module.exports = { createApp };
