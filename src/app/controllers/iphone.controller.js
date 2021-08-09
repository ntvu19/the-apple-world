const iPhone = require('../models/iphone.model')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')

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

    // [GET]    /iphone/:id
    details(req, res, next) {
        iPhone.findById(req.params.id)
            .then(iphone => res.json(mongooseToObject(iphone)))
            .catch(next)
    }

}

module.exports = new iphoneController()