const express = require("express");
const { add  } = require("./report.controller");
const router = express.Router();

router.post("/add", add);

module.exports = router;
