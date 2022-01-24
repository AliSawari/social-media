const express = require("express");
const { add } = require("./post.controller");
const router = express.Router();

router.post("/add", add);

module.exports = router;
