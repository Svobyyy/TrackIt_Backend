const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    protein: {
        type: Number,
        required: true
    },
    fiber: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    carbohydrates: {
        type: Number,
        required: true
    }
    
})

const dateSchema = new Schema({
    date: {
        type: Date,
        required: true,
        lowercase: true
    },
    breakfast: [productSchema],
    lunch: [productSchema],
    dinner: [productSchema],
    snacks: [productSchema]
})

module.exports = mongoose.model('Date', dateSchema)