const MacBook = require('../models/macbook.model')
const { multipleMongooseToObject } = require('../../util/mongoose')

class macbookController {

    // [GET]    /macbook
    show(req, res, next) {
        MacBook.find({})
            .then(macbooks => {
                res.render('macbook', {
                    macbooks: multipleMongooseToObject(macbooks)
                })
            })
            .catch(next)
    }

}

module.exports = new macbookController()