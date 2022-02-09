const express = require("express");
const { add, getFollowingStories , getUserStories } = require("./story.controller");
const router = express.Router();

router.post("/add", add);
router.get("/list/:id", getFollowingStories);
router.get("/all/:id", getUserStories);

module.exports = router;
