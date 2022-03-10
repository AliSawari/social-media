const express = require("express");
const { createNewComment, getCommentsByPostId, removeComment } = require("./comment.controller");
const authentication = require('../../middlewares/auth');
const router = express.Router();

router.post("/add", authentication, createNewComment);
router.get("/get-by-post/:id", authentication, getCommentsByPostId);
router.get("/remove/:id", authentication, removeComment);

module.exports = router;
