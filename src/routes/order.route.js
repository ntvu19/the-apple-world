const express = require('express')
const router = express.Router()

const orderController = require('../app/controllers/order.controller')

router.get('/:phone', orderController.show)
router.post('/create', orderController.createOrder)

module.exports = router