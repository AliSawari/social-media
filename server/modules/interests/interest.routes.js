const express = require("express");
const { getInterestsList , setUserInterests } = require("./interests.controller");
const router = express.Router();

router.get("/list", getInterestsList);

module.exports = router;
