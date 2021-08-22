const Order = require('../models/order.model')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')
const slugGenerator = require('mongoose-slug-generator/lib/slug-generator')

class orderController {

    // [GET] /order/:phone
    show(req, res, next) {
        Order.findOne({ phone: req.params.phone })
            .then(order => {
                if (order != null) {
                    res.render('order', { order: mongooseToObject(order) })
                } else {
                    res.redirect('/')
                }
            })
            .catch(next)
    }

    // [POST] /order/create
    createOrder(req, res, next) {
        var formData = req.body
        formData.product = JSON.parse(formData.product)
        const order = new Order(formData)

        order.save()
            .then(() => res.redirect('back'))
            .catch(error => {

            })
    }

}

module.exports = new orderController()