import { UserContext } from "../context/providers/UserProvider";
import { useContext } from "react";
export const useAuth = () => {
  const { state: user } = useContext(UserContext);
  return user.auth;
};
