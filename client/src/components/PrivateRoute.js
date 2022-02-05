import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
