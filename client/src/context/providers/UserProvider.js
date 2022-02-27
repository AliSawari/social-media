import { createContext, useReducer } from "react";
import reducer from "../reducers/UserReducer";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("social-media-hamidreza"));
  const initialState = {
    auth: user !== null,
    user: user,
    data: undefined
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("User provider rendered" , state);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
