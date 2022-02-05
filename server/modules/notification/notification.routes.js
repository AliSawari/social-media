const express = require("express");
const { notificationList  ,seenNotifications } = require("./notification.controller");
const router = express.Router();

router.get("/list/:id", notificationList);
router.get("/seen/:id", seenNotifications);

module.exports = router;
