const jwt = require('jsonwebtoken');
const authentication = (req, res, next) => {
    const token = req.headers["AUTH-TOKEN"];
    const verify = jwt.verify(token, config.get("JWT_PASSWORD"))
    if (!verify) {
        return res.status(500).json({ message: "authentication failed" });
    }

    next();
}

module.exports = authentication;