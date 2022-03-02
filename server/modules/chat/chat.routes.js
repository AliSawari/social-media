const express = require("express");
const { handleGetMessages , getChats } = require("./chat.controller");
const router = express.Router();

router.get("/messages/:sid/:rid", handleGetMessages);
router.get("/list/:id", getChats);

module.exports = router;
