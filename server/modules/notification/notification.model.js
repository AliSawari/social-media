const mongoose = require("../../database/connection");

const NotificationModel = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        message: { type: String, required: true },
        seen: { type: Boolean, default: false },
        request: {
            type: Object,
            default: { status: false }
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("notifications", NotificationModel);
