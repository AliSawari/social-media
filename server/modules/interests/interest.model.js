const mongoose = require("../../database/connection");

const InterestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
});

const InterestModel = mongoose.model("interests", InterestSchema);

module.exports = InterestModel;
