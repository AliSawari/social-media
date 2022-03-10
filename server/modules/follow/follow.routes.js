const express = require("express");
const { handleFollowUnFollow, setFollowStatus } = require("./follow.controller");
const authentication = require('../../middlewares/auth');
const router = express.Router();

router.post("/follow", authentication, handleFollowUnFollow);
router.post("/set-status", authentication, setFollowStatus);

module.exports = router;
