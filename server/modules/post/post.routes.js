const express = require("express");
const { add, getFollowingPosts } = require("./post.controller");
const router = express.Router();

router.post("/add", add);
router.get("/following-posts/:id", getFollowingPosts);

module.exports = router;
