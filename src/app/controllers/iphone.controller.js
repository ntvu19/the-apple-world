const iPhone = require('../models/iPhone')
const { multipleMongooseToObject } = require('../../util/mongoose')

class iphoneController {

    // [GET]    /iphone
    show(req, res, next) {
        iPhone.find({})
            .then(iphones => {
                res.render('iphone', {
                    iphones: multipleMongooseToObject(iphones)
                })
            })
            .catch(next)
    }

}

module.exports = new iphoneController()