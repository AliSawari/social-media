import React, { useState, useContext, useEffect } from "react";
import { useGetUserId } from "../../../hooks/useGetUserId";
import { ChatContext } from '../../../context/providers/ChatProvider'
import { SendEmojiPicker, SendMessageInput, SendMessageButton } from "../../../components/SendMessage/index";
const MessageSender = ({ id: receiver, setState }) => {
  const { socket } = useContext(ChatContext);
  const { id: sender } = useGetUserId();
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("send message", (data) => {
      setState(data);
    });
  }, []);
  const handleChangText = ({ target: { value } }) => {
    setText(value);
  };

  const handleSelectEmoji = (e, { emoji }) => {
    setText((text) => `${text}${emoji}`);
  };


  const handleSendMessage = () => {
    if (!text.length) return
    
    setText("");
    socket.emit("send message", { message: text, sender, receiver });
  };



  return receiver ? (
    <div className="w-full h-12 bg-neutral-800 absolute bottom-0 right-0 flex justify-between items-center px-2">
      <SendEmojiPicker onEmojiSelect={handleSelectEmoji} />
      <SendMessageInput text={text} onChange={handleChangText} onSubmit={handleSendMessage} />
      <SendMessageButton onSubmit={handleSendMessage} />
    </div>
  ) : [];
};

export default MessageSender;
