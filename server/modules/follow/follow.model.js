const mongoose = require("../../database/connection");

const FollowSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  status: {
    type: String,
    default: "request-none"
  }
});

const FollowModel = mongoose.model("follows", FollowSchema);

module.exports = FollowModel;
