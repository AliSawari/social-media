const mongoose = require("../../database/connection");

const ConverstationModel = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },

        contacts: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "users",
                },
                message: { type: String },
                timestamp: { type: Number }
            }
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Converstation", ConverstationModel);
