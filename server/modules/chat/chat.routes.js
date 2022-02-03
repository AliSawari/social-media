const express = require("express");
const { handleGetMessages } = require("./chat.controller");
const router = express.Router();

router.get("/messages/:sid/:rid", handleGetMessages);

module.exports = router;
