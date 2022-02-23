const Follow = require("./follow.model");
const Notification = require("../notification/notification.model")
const User = require("../user/user.model")

const handleFollowUnFollow = async (req, res) => {
  try {
    const { status, user, following, private } = req.body;
    const isFollowExists = await Follow.findOne({ user, following });
    const userDocument = await User.findOne({ _id: user });

    const statusRequest = private ? "request-sended" : "request-accepted";
    switch (status) {
      case "follow": {
        if (!isFollowExists) {
          await Notification.create({ user: following, message: `${userDocument.fullname} follow you`, request: { status: private, follower: user } });
          await Follow.create({ user, following, status: statusRequest });
          return res.status(200).json({ message: "user following", status: statusRequest });
        }
      }
      case "unfollow": {
        await Follow.deleteOne({ user, following });
        return res.status(200).json({ message: "user unfollowing", status: "request-none" });
      }

      default:
        res.status(400).json({
          message: "status is not correct",
          error,
        });
        break;
    }


  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

const setFollowStatus = async (req, res) => {
  try {
    const { status, user, following } = req.body;
    await Follow.updateOne({ user, following }, { status });
    return res.status(200).json({ message: "done" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};
module.exports = { handleFollowUnFollow, setFollowStatus };
