const AirPod = require('../models/airpod.model')
const { multipleMongooseToObject } = require('../../util/mongoose')

class airpodController {

    // [GET]    /imac
    show(req, res, next) {
        AirPod.find({})
            .then(airpods => {
                res.render('airpod', {
                    airpods: multipleMongooseToObject(airpods)
                })
            })
            .catch(next)
    }

}

module.exports = new airpodController()