const ReportModel = require("./report.model");

const add = async (req, res) => {
    try {
        const { id, type } = req.body;
        await ReportModel.create({ post: id, type });

        res.status(200).json({
            message: "report sended"
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { add }