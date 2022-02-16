import { createContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from 'react-router-dom'
import notif from '../../assets/audio/notif.wav'
import { useGetUserId } from "../../hooks/useGetUserId";
import { useSocketConnection } from "../../hooks/useSocketConnection";
import reducer from "../reducers/ChatReducer";
export const ChatContext = createContext();
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatProvider = ({ children }) => {
  const socket = useSocketConnection("http://localhost:4000")
  
  const { id } = useGetUserId();
  useEffect(() => {
    socket.emit("user:connect", { id })
  }, [])



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
  })
  return (
    <ChatContext.Provider value={{ socket }}>
      <ToastContainer />
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
