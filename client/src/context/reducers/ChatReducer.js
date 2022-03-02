import { SET_NEW_MESSAGE, SET_CHATS, SET_SEEN_MESSAGE, SET_NEW_CHAT } from "../actions/ChatActions";

const reducer = (state, action) => {
  switch (action.key) {
    case SET_NEW_CHAT: {
      return [...state, { ...action.data }];
    }

    case SET_NEW_MESSAGE: {
      return state.map(chat => {

        if (chat._id === action.data._id)
          return action.data;

        return chat;
      })
    }

    case SET_CHATS: {
      return action.data;
    };

    case SET_SEEN_MESSAGE: {
      return state.map(message => {
        if (message._id === action.chatId)
          return {
            ...message, messages: message.messages.map(item => {
              if (item._id === action.id)
                return { ...item, isSeen: true }
              return item;
            })
          };

        return message;
      });
    }

    default:
      return state;
  }
};

export default reducer;
