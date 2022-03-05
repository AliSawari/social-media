const express = require("express");
const { add, getFollowingPosts, likePost, deletePost , getExplorePosts } = require("./post.controller");
const router = express.Router();

router.post("/add", add);
router.post("/like", likePost);
router.post("/delete", deletePost);
router.get("/following-posts/:id", getFollowingPosts);
router.get("/explore/:id", getExplorePosts);

module.exports = router;
