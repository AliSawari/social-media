const express = require("express");
const { add } = require("./save.controller");
const authentication = require('../../middlewares/auth');
const router = express.Router();

router.post("/add", authentication, add);

module.exports = router;
