const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AirPod = new Schema({
    name: String,
    description: String,
    price: String,
    img: String,
    battery: String,
    charge: String,
    technology: String,
    os: String,
    feature: String,
    bluetooth: String
})

module.exports = mongoose.model('AirPod', AirPod)