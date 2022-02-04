const express = require("express");
const { add, getFollowingPosts , likePost , addComment , allPostComments } = require("./post.controller");
const router = express.Router();

router.post("/add", add);
router.post("/like", likePost);
router.get("/following-posts/:id", getFollowingPosts);
router.get("/comments/all/:id", allPostComments);
router.post("/comments/add", addComment);

module.exports = router;
