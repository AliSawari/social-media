export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const GET_USER_DATA = "GET_USER_DATA";
export const SET_CHAT_BACKGROUND = "SET_CHAT_BACKGROUND";
export const SET_CHAT_FONT_SIZE = "SET_CHAT_FONT_SIZE";
export const loginUser = (user) => ({
  type: LOGIN_USER,
  user,
});

export const getUserData = (data) => ({
  type: GET_USER_DATA,
  data
});


export const logoutUser = () => ({
  type: LOGOUT_USER,
});


export const setChatBackground = (image) => ({
  type: SET_CHAT_BACKGROUND,
  image
});


export const setChatFontSize = (size) => ({
  type: SET_CHAT_FONT_SIZE,
  size
});
