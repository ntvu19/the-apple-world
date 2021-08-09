const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/admin.controller')

// Macbook
router.get('/macbook', adminController.macbook)
router.post('/macbook/create', adminController.createMacbook)
router.put('/macbook/:id', adminController.updateMacbook)
router.delete('/macbook/:id', adminController.deleteMacbook)

// iPhone
router.get('/iphone', adminController.iphone)
router.post('/iphone/create', adminController.createIPhone)
router.put('/iphone/:id', adminController.updateIPhone)
router.delete('/iphone/:id', adminController.deleteIPhone)

// Tablet
router.get('/tablet', adminController.tablet)
router.post('/tablet/create', adminController.createTablet)
router.put('/tablet/:id', adminController.updateTablet)
router.delete('/tablet/:id', adminController.deleteTablet)

// iMac
router.get('/imac', adminController.imac)
router.post('/imac/create', adminController.createIMac)
router.put('/imac/:id', adminController.updateIMac)
router.delete('/imac/:id', adminController.deleteIMac)

// Apple Watch
router.get('/apple-watch', adminController.applewatch)
router.post('/apple-watch/create', adminController.createAppleWatch)
router.put('/apple-watch/:id', adminController.updateAppleWatch)
router.delete('/apple-watch/:id', adminController.deleteAppleWatch)

// AirPod
router.get('/airpod', adminController.airpod)
router.post('/airpod/create', adminController.createAirPod)
router.put('/airpod/:id', adminController.updateAirPod)
router.delete('/airpod/:id', adminController.deleteAirPod)

// Login
router.get('/', adminController.login)

module.exports = router