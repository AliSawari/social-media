const Follow = require("./follow.model");
const Notification = require("../notification/notification.model")
const User = require("../user/user.model")

const handleFollowUnFollow = async (req, res) => {
  try {
    const data = req.body;
    const isFollowExists = await Follow.findOne(data);
    if (!isFollowExists) {
      const user = await User.findOne({ _id: data.user });
      await Notification.create({ user: data.following, message: `${user.fullname} follow you` });
      await Follow.create(data);
      return res.status(200).json({ message: "user following", follow: true });
    }


    await Follow.deleteOne(data);
    return res.status(200).json({ message: "user unfollowing", follow: false });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};
module.exports = { handleFollowUnFollow };
