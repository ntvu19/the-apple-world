const express = require('express')
const router = express.Router()

const iphoneController = require('../app/controllers/iphone.controller')

router.get('/', iphoneController.show)
router.get('/:id', iphoneController.details)

module.exports = router