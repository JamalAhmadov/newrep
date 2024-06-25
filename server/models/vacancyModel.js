const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { ObjectId } = require("mongodb");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const vacancySchema = new Schema({
    user: {
        type: ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    }
);

const Vacancy = mongoose.model("Vacancy", vacancySchema);

module.exports = { Vacancy };