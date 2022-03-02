const mongoose = require("../../database/connection");

const ChatSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },

    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    messages: [
      {
        sender: { type: mongoose.Schema.Types.ObjectId },
        message: { type: String },
        timestamp: { type: Number },
        isSeen: {
          type: Boolean,
          default: false
        }
      }
    ],
    lastMessage: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", ChatSchema);
