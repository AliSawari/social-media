const BackgroundModel = require("./background.model");
const UserModel = require("../user/user.model");

const getBackgrounds = async (req, res) => {
    try {
        const { id } = req.params;
        const backgrounds = await BackgroundModel.find({
            $or: [
                { user: null },
                { user: id }
            ]
        });
        return res.status(200).json(backgrounds);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

const setBackground = async (req, res) => {
    try {
        const { id, image } = req.body;
        await UserModel.findByIdAndUpdate(id, { $set: { "chatSettings.background": image } })
        return res.status(200).json({ message: "chat background updated" });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

module.exports = {
    getBackgrounds,
    setBackground
}