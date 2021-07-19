const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MacBook = new Schema({
    name: String,
    description: String,
    price: String,
    img: String,
    monitor: String,
    os: String,
    cpu: String,
    ram: String,
    rom: String,
    battery: String
})

module.exports = mongoose.model('MacBook', MacBook)