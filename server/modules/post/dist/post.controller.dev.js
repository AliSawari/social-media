"use strict";

var Post = require("./post.model");

var moment = require("moment");

var path = require("path");

var FollowModel = require("../follow/follow.model");

var Posts = require("../post/post.model");

var Comment = require("../comments/comment.model");

var Saved = require("../saves/save.model");

var User = require("../user/user.model");

var Notification = require("../notification/notification.model");

var add = function add(req, res) {
  var image, _req$body, tags, description, user, fileName, uploadedPath, timestamp, postDocument;

  return regeneratorRuntime.async(function add$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          image = req.files.image;
          _req$body = req.body, tags = _req$body.tags, description = _req$body.description, user = _req$body.user;
          fileName = Math.ceil(Math.random() * 200000) + image.name;
          uploadedPath = path.resolve(__dirname, "../../public/images", fileName);
          image.mv(uploadedPath, function (error) {
            console.log(error);
            if (error) res.status(500).json({
              error: error
            });
          });
          timestamp = moment.now();
          postDocument = {
            description: description,
            tags: tags.split(","),
            user: user,
            image: fileName,
            timestamp: timestamp
          };
          _context.next = 10;
          return regeneratorRuntime.awrap(Post.create(postDocument));

        case 10:
          res.status(200).json({
            message: "post added"
          });
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            error: _context.t0
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

var getFollowingPosts = function getFollowingPosts(req, res) {
  var id, followings, followingIds, posts;
  return regeneratorRuntime.async(function getFollowingPosts$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return regeneratorRuntime.awrap(FollowModel.find({
            user: id,
            status: "request-accepted"
          }));

        case 4:
          followings = _context2.sent;
          followingIds = followings.map(function (item) {
            return item.following.toHexString();
          });
          followingIds.push(id);
          _context2.next = 9;
          return regeneratorRuntime.awrap(Posts.find({
            user: {
              $in: followingIds
            }
          }).populate("user").sort({
            "timestamp": -1
          }));

        case 9:
          posts = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(posts));

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            message: "internal server error",
            error: _context2.t0
          });

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

var likePost = function likePost(req, res) {
  var _req$body2, id, uid, isLiked, _post, userPost, liker, user, post;

  return regeneratorRuntime.async(function likePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, id = _req$body2.id, uid = _req$body2.uid, isLiked = _req$body2.isLiked;

          if (!isLiked) {
            _context3.next = 9;
            break;
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(Post.updateOne({
            _id: id
          }, {
            $pull: {
              likes: {
                user: uid
              }
            }
          }));

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(Post.findById(id));

        case 7:
          _post = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            isLiked: false,
            count: _post.likes.length
          }));

        case 9:
          _context3.next = 11;
          return regeneratorRuntime.awrap(Post.findById(id));

        case 11:
          userPost = _context3.sent;
          _context3.next = 14;
          return regeneratorRuntime.awrap(User.findOne({
            _id: uid
          }));

        case 14:
          liker = _context3.sent;
          _context3.next = 17;
          return regeneratorRuntime.awrap(User.findOne({
            _id: userPost.user
          }));

        case 17:
          user = _context3.sent;
          _context3.next = 20;
          return regeneratorRuntime.awrap(Notification.create({
            user: user._id,
            message: "".concat(liker.fullname, " like your post")
          }));

        case 20:
          _context3.next = 22;
          return regeneratorRuntime.awrap(Post.updateOne({
            _id: id
          }, {
            $push: {
              likes: {
                user: uid
              }
            }
          }));

        case 22:
          _context3.next = 24;
          return regeneratorRuntime.awrap(Post.findById(id));

        case 24:
          post = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            isLiked: true,
            count: post.likes.length
          }));

        case 28:
          _context3.prev = 28;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          res.status(500).json({
            message: "internal server error",
            error: _context3.t0
          });

        case 32:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 28]]);
};

var deletePost = function deletePost(req, res) {
  var _req$body3, user, id;

  return regeneratorRuntime.async(function deletePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            _req$body3 = req.body, user = _req$body3.user, id = _req$body3.id;
            Post.findOneAndDelete({
              _id: id,
              user: user
            }).exec(function () {
              Saved.deleteMany({
                post: id
              }).exec();
              Comment.deleteMany({
                post: id
              }).exec();
              return res.status(200).json({
                message: "post deleted"
              });
            });
          } catch (error) {
            console.log(error);
            res.status(500).json({
              message: "internal server error",
              error: error
            });
          }

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
};

module.exports = {
  add: add,
  getFollowingPosts: getFollowingPosts,
  likePost: likePost,
  deletePost: deletePost
};