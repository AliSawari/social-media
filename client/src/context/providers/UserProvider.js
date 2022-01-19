import { createContext, useReducer } from "react";
import reducer from "../reducers/UserReducer";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const initialState = {
    auth: false,
    user: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
