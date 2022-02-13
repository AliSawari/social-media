const { Schema } = require("mongoose");
const mongoose = require("../../database/connection");

const ReportSchema = new mongoose.Schema({
    post: {
        type: Schema.Types.ObjectId,
        required: true,
    },

    type: {
        type: String,
        default: "other"
    }

}, { timestamps : true });

const ReportModel = mongoose.model("reports", ReportSchema);

module.exports = ReportModel;
