const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = new Schema({
    name: String,
    category: String,
    description: String,
    price: Number,
    img: String,
    details: {
        type: Array,
        items: {
            monitor: String,
            os: String,
            rear_camera: String,
            front_camera: String,
            cpu: String,
            ram: String,
            rom: String,
            sim: String,
            battery: String
        }
    }
})

module.exports = mongoose.model('Product', Product)