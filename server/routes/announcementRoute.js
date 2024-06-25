const express = require("express");
const router = express.Router();
const {
    announcementPage,
    shareVacancy,
    shareCv
} = require("../controllers/announcementController");
const { authenticateToken } = require("../middlewares/authMiddleWare");

router.route("/")
    .get(authenticateToken, announcementPage);

router.route("/vacancy")
    .post(authenticateToken, shareVacancy);

router.route("/cv")
    .post(authenticateToken, shareCv);

module.exports = { router };