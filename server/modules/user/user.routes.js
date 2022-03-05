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
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/change-profile", changeProfile);
router.get("/user/:id", getUser);
router.get("/user-by-username/:username/:id", getUserByUsername);
router.get("/followers/:id", getFollowers);
router.get("/get-private/:id", getPrivate);

router.get("/search/:text", getUsersBySearch);
router.post("/exists-password", checkExistsPassword);
router.post("/change-password", changePassword);
router.post("/set-chat-font-size", setChatFontSize);
router.post("/set-private", setPrivate);
router.post("/set-interests", setInterests);

module.exports = router;
