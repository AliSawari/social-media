const express = require("express");
const { add  } = require("./save.controller");
const router = express.Router();

router.post("/add", add);

module.exports = router;
