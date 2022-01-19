const express = require("express");
const config = require("config");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./modules/user/user.routes");

const cors = require("cors");
function createApp() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan("dev"));

  app.use("/api/v1/users/", userRoutes);
  app.listen(config.get("PORT") || 4000, () => {
    console.log(`server running on port ${config.get("PORT") || 4000}`);
  });
}

module.exports = { createApp };
