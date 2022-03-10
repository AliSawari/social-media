const express = require("express");
const { getBackgrounds, setBackground } = require("./background.controller");
const authentication = require('../../middlewares/auth')
const router = express.Router();

router.get("/list/:id", authentication, getBackgrounds);
router.post("/set", authentication, setBackground);

module.exports = router;
