const express = require("express");
const { add, getFollowingPosts , likePost } = require("./post.controller");
const router = express.Router();

router.post("/add", add);
router.post("/like", likePost);
router.get("/following-posts/:id", getFollowingPosts);

module.exports = router;
