const express = require("express");
const { getBackgrounds , setBackground } = require("./background.controller");
const router = express.Router();

router.get("/list/:id", getBackgrounds);
router.post("/set", setBackground);

module.exports = router;
