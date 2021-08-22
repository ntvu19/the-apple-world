const Order = require('../models/order.model')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')
const parseurl = require('parseurl')
const slugGenerator = require('mongoose-slug-generator/lib/slug-generator')

class orderController {

    // [GET] /order
    search(req, res, next) {
        res.render('order')
    }

    // [GET] /order/:phone
    show(req, res, next) {
        Order.findOne({ phone: req.params.phone })
            .then(order => {
                if (order != null) {
                    res.render('order-show', { order: mongooseToObject(order) })
                } else {
                    res.redirect('/order')
                }
            })
            .catch(next)
    }

}

module.exports = new orderController()