const express = require("express");
const {
  register,
  login,
  getUser,
  getUsersBySearch,
  getUserByUsername,
  changeProfile,
  getFollowers,
  checkExistsPassword,
  changePassword,
  setChatFontSize,
  setPrivate,
  getPrivate,
  setInterests
} = require("./user.controller");
const authentication = require('../../middlewares/auth');
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/change-profile", authentication, changeProfile);
router.get("/user/:id", authentication, getUser);
router.get("/user-by-username/:username/:id", authentication, getUserByUsername);
router.get("/followers/:id", authentication, getFollowers);
router.get("/get-private/:id", authentication, getPrivate);

router.get("/search/:text", authentication, getUsersBySearch);
router.post("/exists-password", authentication, checkExistsPassword);
router.post("/change-password", authentication, changePassword);
router.post("/set-chat-font-size", authentication, setChatFontSize);
router.post("/set-private", authentication, setPrivate);
router.post("/set-interests", setInterests);

module.exports = router;
