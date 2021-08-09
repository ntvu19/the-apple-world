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

    // [POST]   /admin/macbook/create
    createMacbook(req, res, next) {
        const formData = req.body
        const macbook = new MacBook(formData)
        macbook.save()
            .then(() => res.redirect('back'))
            .catch(error => {

            })
    }

    // [PUT]    /admin/macbook/:id
    updateMacbook(req, res, next) {
        MacBook.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /admin/macbook/:id
    deleteMacbook(req, res, next) {
        MacBook.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
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

    // [POST]   /admin/iphone/create
    createIPhone(req, res, next) {
        const formData = req.body
        const iphone = new iPhone(formData)
        iphone.save()
            .then(() => res.redirect('back'))
            .catch(error => {

            })
    }

    // [PUT]    /admin/iphone/:id
    updateIPhone(req, res, next) {
        iPhone.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /admin/iphone/:id
    deleteIPhone(req, res, next) {
        iPhone.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
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

    // [POST]   /admin/tablet/create
    createTablet(req, res, next) {
        const formData = req.body
        const tablet = new Tablet(formData)
        tablet.save()
            .then(() => res.redirect('back'))
            .catch(error => {

            })
    }

    // [PUT]    /admin/tablet/:id
    updateTablet(req, res, next) {
        Tablet.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /admin/tablet/:id
    deleteTablet(req, res, next) {
        Tablet.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
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

    // [POST]   /admin/imac/create
    createIMac(req, res, next) {
        const formData = req.body
        const imac = new iMac(formData)
        imac.save()
            .then(() => res.redirect('back'))
            .catch(error => {

            })
    }

    // [PUT]    /admin/imac/:id
    updateIMac(req, res, next) {
        iMac.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /admin/imac/:id
    deleteIMac(req, res, next) {
        iMac.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
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

    // [POST]   /admin/apple-watch/create
    createAppleWatch(req, res, next) {
        const formData = req.body
        const watch = new AppleWatch(formData)
        watch.save()
            .then(() => res.redirect('back'))
            .catch(error => {

            })
    }

    // [PUT]    /admin/apple-watch/:id
    updateAppleWatch(req, res, next) {
        AppleWatch.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /admin/apple-watch/:id
    deleteAppleWatch(req, res, next) {
        AppleWatch.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
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

    // [POST]   /admin/airpod/create
    createAirPod(req, res, next) {
        const formData = req.body
        const airpod = new AirPod(formData)
        airpod.save()
            .then(() => res.redirect('back'))
            .catch(error => {

            })
    }

    // [PUT]    /admin/airpod/:id
    updateAirPod(req, res, next) {
        AirPod.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /admin/airpod/:id
    deleteAirPod(req, res, next) {
        AirPod.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [GET] /admin
    login(req, res, next) {
        res.render('./admin/login')
    }

}

module.exports = new adminController()