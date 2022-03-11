const mongoose = require("../../database/connection");

const StorySchema = new mongoose.Schema({

  image: {
    type: String,
    required: true,
  },

  expireTime: {
    type: Number,
    required: true
  },

  views: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "users", } }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
}, { timestamps: true });

const StoryModel = mongoose.model("stories", StorySchema);

module.exports = StoryModel;
