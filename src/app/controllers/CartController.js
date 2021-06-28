const Cart = require('../models/Cart')

class CartController {

    // [GET]    /cart
    show(req, res, next) {
        Cart.find({})
            .then(cart => res.json(cart))
            .catch(next)
    }

}

module.exports = new CartController()