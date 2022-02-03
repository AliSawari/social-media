import { SEND_MESSAGE, SET_MESSAGES } from "../actions/ChatActions";

const reducer = (state, action) => {
  switch (action.key) {
    case SEND_MESSAGE: {
      return [...state, { ...action.data }];
    }

    case SET_MESSAGES: {
      console.log(action);
      return [...state, { ...action.data }];
    }

    default:
      return state;
  }
};

export default reducer;
