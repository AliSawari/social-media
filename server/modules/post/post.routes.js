const express = require("express");
const { add, getFollowingPosts, likePost, deletePost, getExplorePosts } = require("./post.controller");
const authentication = require("../../middlewares/auth");
const router = express.Router();

router.post("/add", authentication, add);
router.post("/like", authentication, likePost);
router.post("/delete", authentication, deletePost);
router.get("/following-posts/:id", authentication, getFollowingPosts);
router.get("/explore/:id", authentication, getExplorePosts);

module.exports = router;
