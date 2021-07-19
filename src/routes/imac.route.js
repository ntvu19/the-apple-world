const express = require('express')
const router = express.Router()

const iphoneController = require('../app/controllers/imac.controller')

router.get('/', iphoneController.show)

module.exports = router