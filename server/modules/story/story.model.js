const { Schema } = require("mongoose");
const mongoose = require("../../database/connection");

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  expireTime: {
    type: Number,
    required: true
  },

  views: [{ user: { type: Schema.Types.ObjectId } }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "users"
  },
}, { timestamps: true });

const StoryModel = mongoose.model("stories", StorySchema);

module.exports = StoryModel;
