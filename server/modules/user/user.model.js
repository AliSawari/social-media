const { Schema } = require("mongoose");
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
  }
});


const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
