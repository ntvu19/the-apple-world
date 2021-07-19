const Tablet = require('../models/tablet.model')
const { multipleMongooseToObject } = require('../../util/mongoose')

class tabletController {

    // [GET]    /tablet
    show(req, res, next) {
        Tablet.find({})
            .then(tablets => {
                res.render('tablet', {
                    tablets: multipleMongooseToObject(tablets)
                })
            })
            .catch(next)
    }

}

module.exports = new tabletController()