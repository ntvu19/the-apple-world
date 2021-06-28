const Product = require('../models/Product')

class ProductController {

    // [GET]    /product
    show(req, res, next) {
        Product.find({})
            .then(product => res.json(product))
            .catch(next)
    }

}

module.exports = new ProductController()