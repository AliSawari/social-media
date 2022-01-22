import { GET_USER_DATA, LOGIN_USER } from "../actions/UserActions";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        auth: true,
        user: action.user,
      };
    case GET_USER_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
