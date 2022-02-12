"use strict";

var _require = require("mongoose"),
    Schema = _require.Schema;

var mongoose = require("../../database/connection");

var StorySchema = new mongoose.Schema({
  image: {
    type: Buffer,
    required: true
  },
  expireTime: {
    type: Number,
    required: true
  },
  views: [{
    user: {
      type: Schema.Types.ObjectId
    }
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
}, {
  timestamps: true
});
var StoryModel = mongoose.model("stories", StorySchema);
module.exports = StoryModel;