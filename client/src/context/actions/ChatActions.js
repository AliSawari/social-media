export const SET_NEW_MESSAGE = "SEND_MESSAGE";
export const SET_NEW_CHAT = "SET_NEW_CHAT";
export const SET_CHATS = "SET_CHATS";
export const SET_SEEN_MESSAGE = "SET_SEEN_MESSAGE";
export const getSendMessage = (data) => ({
  key: SEND_MESSAGE,
  data,
});

export const setChats = (data) => ({
  key: SET_CHATS,
  data,
});

export const getSetSeenMessage = (chatId, id) => ({
  key: SET_SEEN_MESSAGE,
  chatId, id
});


export const setNewChat = (data) => ({
  key: SET_NEW_CHAT,
  data
});

export const setNewMessage = (data) => ({
  key: SET_NEW_MESSAGE,
  data
});
