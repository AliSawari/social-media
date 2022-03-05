const { Schema } = require("mongoose");
const mongoose = require("../../database/connection");

const limitInterestsLength = (items) => {
  return items.length <= 5;
};
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
  profile: { type: String, default: "" },
  bio: { type: String, default: "" },
  saveds: [{ type: Schema.Types.ObjectId, ref: "posts" }],
  chatSettings: {
    type: Object,
    default: {
      fontSize: 15,
      background: "black.jpg"
    }
  },
  settings: {
    type: Object,
    default: {
      private: false
    }
  },
  interests: {
    type: Array,
    validate: [limitInterestsLength, '{PATH} exceeds the limit of 5']
  }
});


const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
