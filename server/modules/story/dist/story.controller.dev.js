"use strict";

var Story = require("./story.model");

var moment = require("moment");

var Follow = require("../follow/follow.model");

var Post = require("../post/post.model");

var path = require("path");

var StoryModel = require("./story.model");

var UserModel = require("../user/user.model");

var add = function add(req, res) {
  var _req$body, id, image, timestamp;

  return regeneratorRuntime.async(function add$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, id = _req$body.id, image = _req$body.image;
          timestamp = moment().add(1, "days").unix();
          _context.next = 5;
          return regeneratorRuntime.awrap(StoryModel.create({
            user: id,
            image: image,
            expireTime: timestamp
          }));

        case 5:
          res.status(200).json({
            message: "story added"
          });
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            error: _context.t0
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var getFollowingStories = function getFollowingStories(req, res) {
  var id, followings, followingIds, timestamp, stories, useHaveStories;
  return regeneratorRuntime.async(function getFollowingStories$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Follow.find({
            user: id
          }));

        case 4:
          followings = _context2.sent;
          followingIds = followings.map(function (item) {
            return item.following;
          });
          timestamp = moment.now();
          _context2.next = 9;
          return regeneratorRuntime.awrap(StoryModel.find({
            user: {
              $in: followingIds
            },
            expireTime: {
              $lt: timestamp
            }
          }).populate("user"));

        case 9:
          stories = _context2.sent;
          useHaveStories = {};
          stories.forEach(function (item) {
            var keys = Object.keys(useHaveStories);
            var id = item.user._id;
            if (!keys.includes(id)) useHaveStories[id] = item.user;
          });
          return _context2.abrupt("return", res.status(200).json(useHaveStories));

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            message: "internal server error",
            error: _context2.t0
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 15]]);
};

var getUserStories = function getUserStories(req, res) {
  var id, timestamp, stories, user;
  return regeneratorRuntime.async(function getUserStories$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          timestamp = moment.now();
          _context3.next = 5;
          return regeneratorRuntime.awrap(StoryModel.find({
            user: id,
            expireTime: {
              $lt: timestamp
            }
          }).populate("user"));

        case 5:
          stories = _context3.sent;
          _context3.next = 8;
          return regeneratorRuntime.awrap(UserModel.findById(id));

        case 8:
          user = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            stories: stories,
            user: user
          }));

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            message: "internal server error",
            error: _context3.t0
          });

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

module.exports = {
  add: add,
  getFollowingStories: getFollowingStories,
  getUserStories: getUserStories
};