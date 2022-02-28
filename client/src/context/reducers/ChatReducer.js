import { SEND_MESSAGE, SET_MESSAGES, SET_SEEN_MESSAGE } from "../actions/ChatActions";

const reducer = (state, action) => {
  switch (action.key) {
    case SEND_MESSAGE: {
      return [...state, { ...action.data }];
    }

    case SET_MESSAGES: {
      return action.data;
    };

    case SET_SEEN_MESSAGE: {
      return state.map(message => {
        if (message._id === action.id)
          return { ...message, isSeen: true };

        return message;
      });
    }

    default:
      return state;
  }
};

export default reducer;
