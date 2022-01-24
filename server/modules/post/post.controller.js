const Post = require("./post.model");
const moment = require("moment");
const path = require("path");
const add = async (req, res) => {
  try {
    const { image } = req.files;
    const fileName = Math.ceil(Math.random() * 200000) + image.name;
    const uploadedPath = path.resolve(
      __dirname,
      "../../public/images",
      fileName
    );
    image.mv(uploadedPath, (error) => {
      console.log(error);
      if (error)
        res.status(500).json({
          error,
        });
    });

    const timestamp = moment.now();
    const postDocument = {
      ...req.body,
      image: fileName,
      timestamp,
    };
    const newPost = new Post(postDocument);
    await newPost.save();

    res.status(200).json({ message: "post added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

module.exports = { add };
