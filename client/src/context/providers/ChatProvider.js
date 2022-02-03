import { createContext, useReducer, useState } from "react";
import reducer from "../reducers/ChatReducer";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
