const AppleWatch = require('../models/applewatch.model')
const { multipleMongooseToObject } = require('../../util/mongoose')

class applewatchController {

    // [GET]    /imac
    show(req, res, next) {
        AppleWatch.find({})
            .then(applewatches => {
                res.render('apple-watch', {
                    applewatches: multipleMongooseToObject(applewatches)
                })
            })
            .catch(next)
    }

}

module.exports = new applewatchController()