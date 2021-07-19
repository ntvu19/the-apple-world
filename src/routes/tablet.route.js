const express = require('express')
const router = express.Router()

const iphoneController = require('../app/controllers/tablet.controller')

router.get('/', iphoneController.show)

module.exports = router