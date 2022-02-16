const { Schema } = require("mongoose");
const mongoose = require("../../database/connection");

const CommentSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "posts"
    },
    depth: {
        type: Number,
        required: true,
        default: 0
    },
    parent: {
        type: Schema.Types.ObjectId , 
        default : null
    }

}, { timestamps: true });

const CommentModel = mongoose.model("comments", CommentSchema);

module.exports = CommentModel;
