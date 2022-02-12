const Post = require("./post.model");
const moment = require("moment");
const path = require("path");
const FollowModel = require("../follow/follow.model");
const Posts = require("../post/post.model");
const User = require("../user/user.model");
const Notification = require("../notification/notification.model");
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
    let followingIds = followings.map((item) => {
      return item.following.toHexString();
    });
    followingIds.push(id);
    
    const posts = await Posts.find({ user: { $in: followingIds } }).populate(
      "user"
    ).populate("comments.user").sort({ "timestamp": -1 });

    console.log(followingIds);
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};


const likePost = async (req, res) => {
  try {


    const { id, uid, isLiked } = req.body;
    if (isLiked) {
      await Post.updateOne({ _id: id }, { $pull: { likes: { user: uid } } })
      const post = await Post.findById(id);
      return res.status(200).json({
        isLiked: false,
        count: post.likes.length
      })
    }

    const userPost = await Post.findById(id);
    const liker = await User.findOne({ _id: uid });
    const user = await User.findOne({ _id: userPost.user });
    await Notification.create({ user: user._id, message: `${liker.fullname} like your post` });
    await Post.updateOne({ _id: id }, { $push: { likes: { user: uid } } })
    const post = await Post.findById(id);


    return res.status(200).json({
      isLiked: true,
      count: post.likes.length
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

const addComment = async (req, res) => {
  try {
    const { user, text, id } = req.body;
    const timestamp = moment.now();

    await Post.updateOne({ _id: id }, { $push: { comments: { user, text, timestamp } } });
    const post = await Post.findById(id).populate("comments.user");
    const comments = post.comments;
    return res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

const allPostComments = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate("comments.user");
    const comments = post.comments;
    return res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};



module.exports = { add, getFollowingPosts, likePost, allPostComments, addComment };
