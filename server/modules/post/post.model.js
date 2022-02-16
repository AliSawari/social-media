const { Schema } = require("mongoose");
const mongoose = require("../../database/connection");

const PostSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  timestamp: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  likes: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "users" } }],
  link: {
    type: String,
    default: () => Math.random().toString(36).slice(5)
  }
});

const PostModel = mongoose.model("posts", PostSchema);

module.exports = PostModel;
