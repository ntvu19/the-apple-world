const MacBook = require('../models/macbook.model')
const iPhone = require('../models/iphone.model')
const Tablet = require('../models/tablet.model')
const iMac = require('../models/imac.model')
const AppleWatch = require('../models/applewatch.model')
const AirPod = require('../models/airpod.model')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')

class adminController {

    // [GET] /admin/macbook
    macbook(req, res, next) {
        MacBook.find({})
            .then(macbooks => res.render('./admin/macbook', {
                macbooks: multipleMongooseToObject(macbooks)
            }))
            .catch(next)
    }

    // [GET] /admin/iphone
    iphone(req, res, next) {
        iPhone.find({})
            .then(iphones => res.render('./admin/iphone', {
                iphones: multipleMongooseToObject(iphones)
            }))
            .catch(next)
    }

    // [GET] /admin/tablet
    tablet(req, res, next) {
        Tablet.find({})
            .then(tablets => res.render('./admin/tablet', {
                tablets: multipleMongooseToObject(tablets)
            }))
            .catch(next)
    }

    // [GET] /admin/imac
    imac(req, res, next) {
        iMac.find({})
            .then(imacs => res.render('./admin/imac', {
                imacs: multipleMongooseToObject(imacs)
            }))
            .catch(next)
    }

    // [GET] /admin/apple-watch
    applewatch(req, res, next) {
        AppleWatch.find({})
            .then(applewatches => res.render('./admin/apple-watch', {
                applewatches: multipleMongooseToObject(applewatches)
            }))
            .catch(next)
    }

    // [GET] /admin/airpod
    airpod(req, res, next) {
        AirPod.find({})
            .then(airpods => res.render('./admin/airpod', {
                airpods: multipleMongooseToObject(airpods)
            }))
            .catch(next)
    }

    // [GET] /admin
    login(req, res, next) {
        res.render('./admin/login')
    }

}

module.exports = new adminController()