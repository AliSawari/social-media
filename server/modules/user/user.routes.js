const express = require("express");
const {
  register,
  login,
  getUser,
  getUsersBySearch,
} = require("./user.controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user/:id", getUser);
router.get("/search/:text", getUsersBySearch);

module.exports = router;
