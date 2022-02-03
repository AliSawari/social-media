const ChatModel = require("./chat.model");

const handleGetMessages = async (req, res) => {
  try {
    const { sid, rid } = req.params;
    const messages = await ChatModel.find({
      $or: [
        { sender: sid, receiver: rid },
        { receiver: sid, sender: rid },
      ],
    })
      .populate("sender", "fullname username")
      .populate("receiver", "fullname username");

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

module.exports = {
  handleGetMessages,
};
