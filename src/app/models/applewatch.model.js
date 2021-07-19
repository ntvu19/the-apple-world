const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AppleWatch = new Schema({
    name: String,
    description: String,
    price: String,
    img: String,
    monitor: String,
    os: String,
    feature: String
})

module.exports = mongoose.model('AppleWatch', AppleWatch)