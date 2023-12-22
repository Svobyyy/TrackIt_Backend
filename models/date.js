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
        required: true,
        default: 0
    },
    fiber: {
        type: Number,
        required: true,
        default: 0

    },
    fat: {
        type: Number,
        required: true,
        default: 0
    },
    carbohydrates: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    }
    
})

const dateSchema = new Schema({
    date: {
        type: Date,
        required: true,
        lowercase: true,
        minLenght: 10,
        maxLength: 10,
    },
    breakfast: [productSchema],
    lunch: [productSchema],
    dinner: [productSchema],
    snacks: [productSchema]
})

module.exports = mongoose.model('Date', dateSchema)