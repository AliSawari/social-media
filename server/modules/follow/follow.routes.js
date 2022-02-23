const express = require("express");
const { handleFollowUnFollow , setFollowStatus } = require("./follow.controller");
const router = express.Router();

router.post("/follow", handleFollowUnFollow);
router.post("/set-status", setFollowStatus);

module.exports = router;
