const express = require("express");
const { add, getFollowingPosts, likePost, addComment, allPostComments, saveToggle, removeComment } = require("./post.controller");
const router = express.Router();

router.post("/add", add);
router.get("/save/:id", saveToggle);
router.post("/like", likePost);
router.get("/following-posts/:id", getFollowingPosts);

module.exports = router;
