const mongoose = require("../../database/connection");

const ChatSchema = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },

    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    isSeen: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", ChatSchema);
