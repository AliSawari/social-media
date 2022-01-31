const mongoose = require("../../database/connection");

const FollowSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
});

const FollowModel = mongoose.model("follows", FollowSchema);

module.exports = FollowModel;
