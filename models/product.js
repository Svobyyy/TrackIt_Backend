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

module.exports = productSchema

module.exports = mongoose.model('Product', productSchema)