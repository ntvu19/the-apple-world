const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Cart = new Schema({
    list_product: {
        type: Array,
        items: {
            name: String,
            img: String,
            quantity: Number,
            price: Number
        }
    },
    name: String,
    phonenumber: String,
    address: String
})

module.exports = mongoose.model('Cart', Cart)