const Follow = require("./follow.model");
const handleFollowUnFollow = async (req, res) => {
  try {
    const data = req.body;
    const isFollowExists = await Follow.findOne(data);
    if (!isFollowExists) {
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
