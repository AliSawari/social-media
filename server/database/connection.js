const mongoose = require("mongoose");
const config = require("config");
mongoose.connect(config.get("MONGO_URI"), () => {
  console.log(`mongodb database connected`);
});

module.exports = mongoose;
