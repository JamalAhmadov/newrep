const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { ObjectId } = require("mongodb");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const cvSchema = new Schema({
    user: {
        type: ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    }
);

const Cv = mongoose.model("cv", cvSchema);

module.exports = { Cv };