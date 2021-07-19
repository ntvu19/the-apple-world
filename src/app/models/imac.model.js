const mongoose = require('mongoose')

const Schema = mongoose.Schema

const iMac = new Schema({
    name: String,
    description: String,
    price: String,
    img: String,
    os: String,
    cpu: String,
    gpu: String,
    ram: String,
    rom: String
})

module.exports = mongoose.model('iMac', iMac)