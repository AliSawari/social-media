import { createContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useGetUserId } from "../../hooks/useGetUserId";
import { useSocketConnection } from "../../hooks/useSocketConnection";
import reducer from "../reducers/ChatReducer";
export const ChatContext = createContext();
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatProvider = ({ children }) => {
  const socket = useSocketConnection("http://localhost:4000")
  const navigate = useNavigate();
  const { id } = useGetUserId();
  useEffect(() => {
    socket.emit("user:connect", { id })
  }, [])


  const handleClickToast = (sender) => {
    navigate(`/chat/list/${sender}`)
  }
  socket.on("user:notification", ({ message }) => {
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
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      <ToastContainer />
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
