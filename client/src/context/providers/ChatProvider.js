import { createContext, useEffect, useReducer, useState } from "react";
import notif from '../../assets/audio/notif.wav'
import { useGetUserId } from "../../hooks/useGetUserId";
import { io } from "socket.io-client";
export const ChatContext = createContext();
import { ToastContainer, toast } from "react-toastify";
import reducer from '../reducers/ChatReducer';
import "react-toastify/dist/ReactToastify.css";
import { getSendMessage } from "../actions/ChatActions";

const ChatProvider = ({ children }) => {

  const initialState = [];
  const [messages, dispatch] = useReducer(reducer, initialState)

  const { id } = useGetUserId();
  let socket = io("http://localhost:4000", {
    transports: ["websocket"],
    upgrade: false,
  });
  console.log("Chat provider rendered");

  useEffect(() => {
    socket.emit("user:connect", { id });
  }, []);



  socket.on("user:notification", ({ message }) => {
    const audio = new Audio(notif);
    audio.play();
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  });

  socket.on("send message", (data) => {
    dispatch(getSendMessage(data))
  });

  return (
    <ChatContext.Provider value={{ socket, messages, dispatch }}>
      <ToastContainer />
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
