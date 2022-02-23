const express = require("express");
const { add, getFollowingPosts, likePost, deletePost } = require("./post.controller");
const router = express.Router();

router.post("/add", add);
router.post("/like", likePost);
router.post("/delete", deletePost);
router.get("/following-posts/:id", getFollowingPosts);

module.exports = router;
