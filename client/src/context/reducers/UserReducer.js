import { LOGIN_USER } from "../actions/UserActions";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        auth: true,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
