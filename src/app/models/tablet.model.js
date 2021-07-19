const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Tablet = new Schema({
    name: String,
    description: String,
    price: String,
    img: String,
    monitor: String,
    os: String,
    rear_cam: String,
    front_cam: String,
    cpu: String,
    ram: String,
    rom: String,
    battery: String
})

module.exports = mongoose.model('Tablet', Tablet)