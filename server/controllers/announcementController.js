const { createTokenForAnnouncement } = require("../token/createToken");
const { Vacancy } = require("../models/vacancyModel");
const { Cv } = require("../models/cvModel");
const jwt = require("jsonwebtoken");

const announcementPage = async (req, res) => {
    const token = createTokenForAnnouncement(req.user._id);
    res.status(200).json({
        success: true,
        userrole: req.user.userrole,
        token
    });
};

const shareVacancy = async (req, res) => {
    const token = req.body.token;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(400).json({
                success: false,
                message: "UserNotFound"
            });;

            const user = await User.findById(decoded.userId);

            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: "UserNotFound"
                });;
            };

            if (user.userrole !== "employer") {
                return res.status(400).json({
                    success: false,
                    message: "UserIsNotEmployer"
                });
            };
            //
            //
            //
            //
        });
    } else {
        res.status(400).json({
            success: false,
            message: "UserNotFound"
        });;
    };
};

const shareCv = async (req, res) => {
    const token = req.body.token;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(400).json({
                success: false,
                message: "UserNotFound"
            });;

            const user = await User.findById(decoded.userId);

            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: "UserNotFound"
                });
            };

            if (user.userrole !== "freelancer") {
                return res.status(400).json({
                    success: false,
                    message: "UserIsNotFreelancer"
                });
            };
            //
            //
            //
            //
        });
    } else {
        res.status(400).json({
            success: false,
            message: "UserNotFound"
        });;
    };
};

module.exports = {
    announcementPage,
    shareVacancy,
    shareCv
};