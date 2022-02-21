import { GET_USER_DATA, LOGIN_USER, LOGOUT_USER, SET_CHAT_BACKGROUND, SET_CHAT_FONT_SIZE } from "../actions/UserActions";

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

    case LOGOUT_USER: {
      return {
        auth: false,
        user: null,
        data: undefined
      };
    };
    case SET_CHAT_BACKGROUND: {
      return {
        ...state,
        data: {
          ...state.data,
          chatSettings: {
            ...state.data.chatSettings,
            background: action.image
          }
        }
      }
    };

    case SET_CHAT_FONT_SIZE: {
      return {
        ...state,
        data: {
          ...state.data,
          chatSettings: {
            ...state.data.chatSettings,
            fontSize: action.size
          }
        }
      }
    };


    default:
      return state;
  }
};

export default reducer;
