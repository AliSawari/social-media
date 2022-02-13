const { Schema } = require("mongoose");
const mongoose = require("../../database/connection");

const SaveSchema = new mongoose.Schema({
    post: {
        type: Schema.Types.ObjectId,
        required: true,
    },

    user: {
        type: Schema.Types.ObjectId,
        required: true,
    },

}, { timestamps: true });

const SaveModel = mongoose.model("saveds", SaveSchema);

module.exports = SaveModel;
