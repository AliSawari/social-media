const express = require("express");
const { add } = require("./story.controller");
const router = express.Router();

router.post("/add",add);

module.exports = router;
