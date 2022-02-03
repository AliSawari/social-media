import React, { useEffect, useState, useContext } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import Picker from "emoji-picker-react";
import { useSocketConnection } from "../../../hooks/useSocketConnection";
import { useGetUserId } from "../../../hooks/useGetUserId";
import { ChatContext } from "../../../context/providers/ChatProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MessageSender = ({ id: receiver, setState }) => {
  const socket = useSocketConnection("http://localhost:4000");
  const { id: sender } = useGetUserId();
  useEffect(() => {
    socket.emit("user:connect", { id: sender });
  }, []);
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleChangeMessage = ({ target: { value } }) => {
    setText(value);
  };

  const handleSelectEmoji = (e, { emoji }) => {
    setText((text) => `${text}${emoji}`);
  };

  const handleToggleEmojiPicker = () => {
    setToggle((toggle) => !toggle);
  };

  const handleSendMessage = () => {
    setText("");
    socket.emit("send message", { message: text, sender, receiver });
  };

  socket.on("send message", (data) => {
    console.log(data);
    setState(data);
    if (data.sender._id === sender) return;
    toast.success(`${data.sender.fullname} send a message`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  });

  return (
    <div className="w-full h-12 bg-neutral-900 absolute bottom-0 right-0 flex justify-between items-center px-2">
      <ToastContainer />
      <div className="w-1/12">
        {toggle && (
          <Picker
            pickerStyle={{ position: "absolute", bottom: "70px" }}
            onEmojiClick={handleSelectEmoji}
          />
        )}
        <button
          onClick={handleToggleEmojiPicker}
          className="text-2xl text-violet-500"
        >
          <BsEmojiSmile />
        </button>
      </div>
      <div className="w-10/12">
        <input
          type="text"
          className="w-full h-12 bg-transparent outline-none text-white font-main"
          placeholder="Type your message"
          value={text}
          onChange={handleChangeMessage}
        />
      </div>
      <div className="w-1/12 text-right text-2xl text-violet-500">
        <button type="button" onClick={handleSendMessage}>
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};

export default MessageSender;
