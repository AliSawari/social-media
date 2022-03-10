const express = require("express");
const { add, getFollowingStories, getUserStories } = require("./story.controller");
const authentication = require('../../middlewares/auth');
const router = express.Router();
router.post("/add", authentication , add);
router.get("/list/:id", authentication , getFollowingStories);
router.get("/all/:id", authentication , getUserStories);

module.exports = router;
