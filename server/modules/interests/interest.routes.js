const express = require("express");
const { getInterestsList } = require("./interests.controller");
const router = express.Router();

router.get("/list", getInterestsList);

module.exports = router;
