const User = require("./user.model");
const Post = require("../post/post.model");
const jwt = require("jsonwebtoken");
const config = require("config");
const FollowModel = require("../follow/follow.model");
const Posts = require("../post/post.model");

const register = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new User(user);

    await newUser.save();
    res.status(200).json({ message: "user created" });
  } catch (error) {
    res.status(500).json({
      error,
      message: "internal server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.findOne(body);
    if (!user)
      return res
        .status(401)
        .json({ message: "username or password is invalid" });

    const token = jwt.sign(
      {
        level: "user",
        id: user._id,
      },
      config.get("JWT_PASSWORD")
    );

    return res.status(200).json({
      id: user._id,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json({
      fullname: user.fullname,
      profile: user.profile,
      bio: user.bio,
      username: user.username,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

const getUsersBySearch = async (req, res) => {
  try {
    const { text } = req.params;
    const users = await User.find({
      username: { $regex: text, $options: "i" },
    }).limit(10);
    return res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const { username, id } = req.params;
    const user = await User.findOne({ username });
    if (user === null) {
      return res.status(404).json({ message: "user not found" });
    }

    const data = {
      user: id,
      following: user._id,
    };

    const isFollow = await FollowModel.findOne(data);
    const followers = await FollowModel.find({ following: user.id }).count();
    const followings = await FollowModel.find({ user: user.id }).count();
    const posts = await Post.find({ user: user._id });
    return res.status(200).json({
      id: user._id,
      fullname: user.fullname,
      profile: user.profile,
      bio: user.bio,
      username: user.username,
      posts,
      follow: isFollow,
      followers,
      followings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

module.exports = {
  register,
  login,
  getUser,
  getUsersBySearch,
  getUserByUsername,
};
