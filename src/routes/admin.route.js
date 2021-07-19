const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/admin.controller')

router.get('/macbook', adminController.macbook)
router.get('/iphone', adminController.iphone)
router.get('/tablet', adminController.tablet)
router.get('/imac', adminController.imac)
router.get('/apple-watch', adminController.applewatch)
router.get('/airpod', adminController.airpod)
router.get('/', adminController.login)

module.exports = router