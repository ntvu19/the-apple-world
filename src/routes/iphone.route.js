const express = require('express')
const router = express.Router()

const iphoneController = require('../app/controllers/iphone.controller')

router.get('/', iphoneController.show)

module.exports = router