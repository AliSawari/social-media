export const LOGIN_USER = "LOGIN_USER";
export const GET_USER_DATA = "GET_USER_DATA";
export const loginUser = (user) => ({
  type: LOGIN_USER,
  user,
});

export const getUserData = (data) => ({
  type : GET_USER_DATA , 
  data
});
