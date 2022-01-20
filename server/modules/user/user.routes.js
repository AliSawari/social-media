const express = require("express");
const { register, login , getUser } = require("./user.controller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user/:id", getUser);

module.exports = router;
