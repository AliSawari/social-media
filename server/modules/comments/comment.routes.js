const express = require("express");
const { createNewComment, getCommentsByPostId, removeComment } = require("./comment.controller");
const router = express.Router();

router.post("/add", createNewComment);
router.get("/get-by-post/:id", getCommentsByPostId);
router.get("/remove/:id", removeComment);

module.exports = router;
