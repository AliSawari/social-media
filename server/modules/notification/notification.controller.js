const Notification = require("./notification.model")
const notificationList = async (req, res) => {
    try {
        const { id } = req.params;
        const readNotifications = await Notification.find({ user: id, seen: true });
        const unReadNotifications = await Notification.find({ user: id, seen: false });
        res.status(200).json({ reads: readNotifications, unReads: unReadNotifications });
    } catch (error) {
        res.status(500).json(error);
    }
}

const seenNotifications = async (req, res) => {
    try {
        const { id } = req.params;
        await Notification.updateMany({ user: id }, { seen: true });
        res.status(200).json({ message: "successfully" });
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = {
    notificationList,
    seenNotifications
}