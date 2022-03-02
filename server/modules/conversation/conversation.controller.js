const Converstation = require("./conversation.model");

const getUserContacts = async (req, res) => {
    try {
        const { id } = req.params;
        const list = await Converstation.findOne({ user: id }).populate("contacts.user");                
        res.status(200).json(list);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error",
            error,
        });
    }
}

module.exports = {
    getUserContacts,
}