const Save = require("./save.model");

const add = async (req, res) => {
    try {
        const { post, user } = req.body;
        const isSaved = await Save.findOne({ post, user });
        let mode;
        if (isSaved) {
            await Save.deleteOne({ user, post });
            mode = "unsave"
        } else {
            await Save.create({ post, user });
            mode = "save"
        }

        res.status(200).json({
            mode
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { add }