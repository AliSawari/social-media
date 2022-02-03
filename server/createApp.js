const express = require("express");
const config = require("config");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./modules/user/user.routes");
const storyRoutes = require("./modules/story/story.routes");
const postRoutes = require("./modules/post/post.routes");
const followRoutes = require("./modules/follow/follow.routes");
const chatRoutes = require("./modules/chat/chat.routes");
const converstationRoutes = require("./modules/conversation/conversation.routes");
const moment = require("moment");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const http = require("http");
const Converstation = require("./modules/conversation/conversation.model")
const { Server } = require("socket.io");

const ChatModel = require("./modules/chat/chat.model");
function createApp() {
  const app = express();
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  app.use("/public", express.static("public"));

  app.use(fileUpload());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan("dev"));

  io.on("connection", (socket) => {
    socket.on("user:connect", ({ id }) => {
      socket.join(id);
    });
    socket.on("send message", async ({ message, sender, receiver }) => {
      const newChat = await ChatModel.create({
        message,
        sender,
        receiver,
      });

      // بعد اینکه اولین پیام از سوی یک نفر ارسال شد به مخاطبین من اون اضافه میشه و به مخاطبین اون من اضافه میشه
      // converstation => sender => receiver
      // converstation => receiver => sender

      const isSenderConverstationExists = await Converstation.findOne({ user: sender });
      const isReceiverConverstationExists = await Converstation.findOne({ user: receiver });

      // وقتی اولین پیام میره اگه کاربر توی گفتگو ها وجود داشت بررسی کن که توی مخاطبین هم این وجود داره یا نه اگه نداشت به مخاطبین اضافه کن اگه کلن وجود نداشت یکی به گفتگو ها اضافه کن

      const timestamp = moment.now();

      console.log();
      if (isSenderConverstationExists) {
        if (!isSenderConverstationExists.contacts.find(user => user.user == receiver)) {
          await Converstation.updateOne({ user: sender }, { $push: { contacts: { user: receiver, timestamp } } });
        }
      } else {
        await Converstation.create({ user: sender, contacts: [{ user: receiver, timestamp }] });
      }

      if (isReceiverConverstationExists) {
        if (!isReceiverConverstationExists.contacts.find(user => user.user == sender)) {
          await Converstation.updateOne({ user: sender }, { $push: { contacts: { user: sender, timestamp } } });
        }
      } else {
        await Converstation.create({ user: receiver, contacts: [{ user: sender, timestamp }] });
      }


      const chat = await ChatModel.findById(newChat._id)
        .populate("sender", "fullname username")
        .populate("receiver", "fullname username");

      io.to(receiver).to(sender).emit("send message", chat);
    });
  });

  app.use("/api/v1/users/", userRoutes);
  app.use("/api/v1/stories/", storyRoutes);
  app.use("/api/v1/posts/", postRoutes);
  app.use("/api/v1/follow/", followRoutes);
  app.use("/api/v1/chat/", chatRoutes);
  app.use("/api/v1/converstation/", converstationRoutes);

  server.listen(config.get("PORT") || 4000, () => {
    console.log(`server running on port ${config.get("PORT") || 4000}`);
  });
}

module.exports = { createApp };
