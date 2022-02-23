const User = require("./user.model");
const Post = require("../post/post.model");
const jwt = require("jsonwebtoken");
const config = require("config");
const FollowModel = require("../follow/follow.model");
const Notification = require("../notification/notification.model");
const path = require("path");
const SaveModel = require("../saves/save.model");
const StoryModel = require('../story/story.model');
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
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
    const notifications = await Notification.find({ user: id })
    const followers = await FollowModel.find({ following: id }).populate("user");
    const followings = await FollowModel.find({ user: id }).populate("following");;
    const savedPosts = await SaveModel.find({ user: id }).populate("user").populate("post").populate({ path: "post", populate: { path: "user", model: "users" } });
    const stories = await StoryModel.find({ user: id }).populate("user");

    return res.status(200).json({
      fullname: user.fullname,
      profile: user.profile,
      bio: user.bio,
      chatSettings: user.chatSettings,
      settings: user.settings,
      username: user.username,
      settings: user.settings,
      notifications,
      followers,
      followings,
      saveds: savedPosts,
      stories
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

    const userFollowDocument = await FollowModel.findOne(data);

    let followStatus;
    if (userFollowDocument) {
      followStatus = userFollowDocument.status;
    } else {
      followStatus === "follow";
    }

    const followers = await FollowModel.find({ following: user.id });
    const followings = await FollowModel.find({ user: user.id });
    const posts = await Post.find({ user: user._id });
    return res.status(200).json({
      id: user._id,
      fullname: user.fullname,
      profile: user.profile,
      bio: user.bio,
      username: user.username,
      settings: user.settings,
      posts,
      follow: followStatus,
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

const changeProfile = async (req, res) => {
  try {
    const files = req.files;
    const { fullname, id, bio } = req.body;
    let fileName;
    const user = await User.findOne({ _id: id });
    fileName = user.profile;
    if (files?.profile) {
      fileName = Math.ceil(Math.random() * 200000) + files.profile.name;
      const uploadedPath = path.resolve(
        __dirname,
        "../../public/images",
        fileName
      );

      files.profile.mv(uploadedPath, (error) => {
        console.log(error);
        if (error)
          res.status(500).json({
            error,
          });
      });
    }

    await User.findOneAndUpdate({ _id: id }, { fullname, profile: fileName, bio });

    res.status(200).json({
      message: "user profile updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

const getFollowers = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await FollowModel.find({ following: id }).populate("user")
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};


const checkExistsPassword = async (req, res) => {
  try {
    const { password, id } = req.body;
    const user = await User.findById(id);
    const isExists = await bcrypt.compare(password, user.password);
    console.log(isExists);
    res.status(200).json({ isExists });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

const changePassword = async (req, res) => {
  try {
    const { password, id } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.findByIdAndUpdate(id, { password: hashedPassword });
    res.status(200).json({ message: "password updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};


const setChatFontSize = async (req, res) => {
  try {
    const { size, id } = req.body;
    await User.findByIdAndUpdate(id, { $set: { "chatSettings.fontSize": size } });
    res.status(200).json({ message: "chat font size updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};



const setPrivate = async (req, res) => {
  try {
    const { private, id } = req.body;
    await User.findByIdAndUpdate(id, { $set: { "settings.private": private } });
    res.status(200).json({ message: "set private status" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};


const getPrivate = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({ settings: user.settings });
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
  changeProfile,
  getFollowers,
  checkExistsPassword,
  changePassword,
  setChatFontSize,
  setPrivate,
  getPrivate
};
