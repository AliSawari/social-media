const express = require("express");
const {
  register,
  login,
  getUser,
  getUsersBySearch,
  getUserByUsername,
  changeProfile,
  getFollowers
} = require("./user.controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/change-profile", changeProfile);
router.get("/user/:id", getUser);
router.get("/user-by-username/:username/:id", getUserByUsername);
router.get("/followers/:id", getFollowers);

router.get("/search/:text", getUsersBySearch);

module.exports = router;
