const express = require("express");
const { add, getFollowingPosts, likePost, addComment, allPostComments, saveToggle, removeComment } = require("./post.controller");
const router = express.Router();

router.post("/add", add);
router.get("/save/:id", saveToggle);
router.post("/like", likePost);
router.get("/following-posts/:id", getFollowingPosts);
router.get("/comments/all/:id", allPostComments);
router.post("/comments/add", addComment);
router.get("/delete-comment/:pid/:id", removeComment);

module.exports = router;
