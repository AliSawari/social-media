const Interest = require('./interest.model');
const getInterestsList = async (req, res) => {
    try {
        const interests = await Interest.find({});
        return res.status(200).json(interests);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error",
            error,
        });
    }
}


module.exports = {
    getInterestsList
}