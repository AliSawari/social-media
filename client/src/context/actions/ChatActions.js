export const SEND_MESSAGE = "SEND_MESSAGE";
export const SET_MESSAGES = "SET_MESSAGES";
export const SET_SEEN_MESSAGE = "SET_SEEN_MESSAGE";
export const getSendMessage = (data) => ({
  key: SEND_MESSAGE,
  data,
});

export const getSetMessages = (data) => ({
  key: SET_MESSAGES,
  data,
});

export const getSetSeenMessage = (id) => ({
  key: SET_SEEN_MESSAGE,
  id
});
