const express = require("express");
const config = require("config");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./modules/user/user.routes");
const storyRoutes = require("./modules/story/story.routes");
const postRoutes = require("./modules/post/post.routes");
const followRoutes = require("./modules/follow/follow.routes");
const fileUpload = require("express-fileupload");
const cors = require("cors");

function createApp() {
  const app = express();
  app.use("/public", express.static("public"));

  app.use(fileUpload());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan("dev"));

  app.use("/api/v1/users/", userRoutes);
  app.use("/api/v1/stories/", storyRoutes);
  app.use("/api/v1/posts/", postRoutes);
  app.use("/api/v1/follow/", followRoutes);
  app.listen(config.get("PORT") || 4000, () => {
    console.log(`server running on port ${config.get("PORT") || 4000}`);
  });
}

module.exports = { createApp };
