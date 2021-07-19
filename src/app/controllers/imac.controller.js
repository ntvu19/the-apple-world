const iMac = require('../models/imac.model')
const { multipleMongooseToObject } = require('../../util/mongoose')

class imacController {

    // [GET]    /imac
    show(req, res, next) {
        iMac.find({})
            .then(imacs => {
                res.render('imac', {
                    imacs: multipleMongooseToObject(imacs)
                })
            })
            .catch(next)
    }

}

module.exports = new imacController()