"use strict";

var _require = require("mongoose"),
    Schema = _require.Schema;

var mongoose = require("../../database/connection");

var PostSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  timestamp: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  likes: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  }],
  link: {
    type: String,
    "default": function _default() {
      return Math.random().toString(36).slice(5);
    }
  },
  tags: {
    type: Array,
    "default": []
  }
});
var PostModel = mongoose.model("posts", PostSchema);
module.exports = PostModel;