export const SEND_MESSAGE = "SEND_MESSAGE";
export const SET_MESSAGES = "SET_MESSAGES";
export const getSendMessage = (data) => ({
  key: SEND_MESSAGE,
  data,
});

export const getSetMessages = (data) => ({
  key: SET_MESSAGES,
  data,
});
