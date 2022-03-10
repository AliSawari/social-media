const express = require("express");
const { notificationList, seenNotifications } = require("./notification.controller");
const authentication = require('../../middlewares/auth');
const router = express.Router();

router.get("/list/:id", authentication, notificationList);
router.get("/seen/:id", authentication, seenNotifications);

module.exports = router;
