import { UserContext } from "../context/providers/UserProvider";
import { useContext } from "react";
export const useGetUserId = () => {
  const { state: user } = useContext(UserContext);
  return { id: user.user.id };
};
