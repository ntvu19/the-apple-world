const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Order = new Schema({
    name: { type: String, require: true },
    phone: { type: String, require: true },
    address: { type: String, require: true },
    state: { type: String, require: true },
    product: [{
        img: String,
        product_name: String,
        quantity: String,
        price: String
    }]

})

module.exports = mongoose.model('Order', Order)