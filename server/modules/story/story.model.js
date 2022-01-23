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

  timestamp: {
    type: String,
    required: true,
  },
});

const StoryModel = mongoose.model("stories", StorySchema);

module.exports = StoryModel;
