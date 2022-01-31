const Post = require("./post.model");
const moment = require("moment");
const path = require("path");
const FollowModel = require("../follow/follow.model");
const Posts = require("../post/post.model");
const add = async (req, res) => {
  try {
    const { image } = req.files;
    const fileName = Math.ceil(Math.random() * 200000) + image.name;
    const uploadedPath = path.resolve(
      __dirname,
      "../../public/images",
      fileName
    );
    image.mv(uploadedPath, (error) => {
      console.log(error);
      if (error)
        res.status(500).json({
          error,
        });
    });

    const timestamp = moment.now();
    const postDocument = {
      ...req.body,
      image: fileName,
      timestamp,
    };
    await Post.create(postDocument);

    res.status(200).json({ message: "post added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

const getFollowingPosts = async (req, res) => {
  try {
    const { id } = req.params;
    const followings = await FollowModel.find({ user: id });
    const followingIds = followings.map((item) => {
      return item.following;
    });
    const posts = await Posts.find({ user: { $all: followingIds } }).populate(
      "user"
    );
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

module.exports = { add, getFollowingPosts };
