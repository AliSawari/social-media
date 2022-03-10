const express = require("express");
const { handleGetMessages, getChats } = require("./chat.controller");
const authentication = require('../../middlewares/auth');
const router = express.Router();

router.get("/messages/:sid/:rid", authentication, handleGetMessages);
router.get("/list/:id", authentication, getChats);

module.exports = router;
