const jwt = require("jsonwebtoken");

const createTokenForLogin = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
};

const createTokenForAnnouncement = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
};

module.exports = { createTokenForLogin, createTokenForAnnouncement };