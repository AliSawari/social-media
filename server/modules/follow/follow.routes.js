const express = require("express");
const { handleFollowUnFollow } = require("./follow.controller");
const router = express.Router();

router.post("/follow", handleFollowUnFollow);

module.exports = router;
