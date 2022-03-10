const express = require("express");
const { getInterestsList } = require("./interests.controller");
const authentication = require('../../middlewares/auth');
const router = express.Router();

router.get("/list", authentication, getInterestsList);

module.exports = router;
