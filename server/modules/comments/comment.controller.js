const CommentModel = require("./comment.model");

const createNewComment = async (req, res) => {
    try {
        const comment = req.body;
        await CommentModel.create(comment);

        const comments = await CommentModel.find({ post: comment.post }).populate("user").populate("post");
        return res.status(200).json(comments);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error",
            error,
        });
    }

};

const getCommentsByPostId = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await CommentModel.find({ post: id }).populate("post").populate("user").sort({ timestamp: -1 });
        return res.status(200).json(comments);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error",
            error,
        });
    }

};


const removeComment = async (req, res) => {
    try {
        const { id } = req.params;
        await CommentModel.deleteOne({ _id: id });        
        return res.status(200).json({ message: "comment removed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error",
            error,
        });
    }
};

module.exports = {
    createNewComment, getCommentsByPostId, removeComment
}