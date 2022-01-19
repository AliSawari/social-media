const mongoose = require("../../database/connection");

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  profile: String,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
