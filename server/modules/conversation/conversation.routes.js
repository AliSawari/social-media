const express = require("express");
const { getUserContacts } = require("./conversation.controller");
const router = express.Router();

router.get("/list/:id", getUserContacts);

module.exports = router;
