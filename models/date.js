const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dateSchema = new Schema({
    date: {
        type: Date,
        required: true,
        lowercase: true
    }
})

module.exports = mongoose.model('Date', dateSchema)