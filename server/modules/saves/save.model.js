const { Schema } = require("mongoose");
const mongoose = require("../../database/connection");

const SaveSchema = new mongoose.Schema({
    post: {
        type: Schema.Types.ObjectId,
        required: true,
        ref : "posts"
    },

    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref : "users"
    },

}, { timestamps: true });

const SaveModel = mongoose.model("saveds", SaveSchema);

module.exports = SaveModel;
