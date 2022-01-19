const User = require("./user.model");
const register = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new User(user);

    await newUser.save();
    res.status(200).json({ message: "user created" });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

module.exports = {
  register,
};
