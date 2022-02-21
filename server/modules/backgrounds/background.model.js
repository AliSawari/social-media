const { Schema } = require("mongoose");
const mongoose = require("../../database/connection");

const BackgroundSchema = new mongoose.Schema({    
    image: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: false
    }

}, { timestamps: true });

const BackgroundModel = mongoose.model("backgrounds", BackgroundSchema);

module.exports = BackgroundModel;
