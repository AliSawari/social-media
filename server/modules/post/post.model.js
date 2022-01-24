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
  },
});

const PostModel = mongoose.model("posts", PostSchema);

module.exports = PostModel;
