import React from "react";
import { Navigate } from "react-router";
import ChatProvider from "../context/providers/ChatProvider";
import { useAuth } from "../hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? <ChatProvider>{children}</ChatProvider> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
