const express = require('express')
const router = express.Router()

const orderController = require('../app/controllers/order.controller')

router.get('/', orderController.search)
router.get('/:phone', orderController.show)

module.exports = router