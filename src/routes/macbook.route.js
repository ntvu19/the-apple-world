const express = require('express')
const router = express.Router()

const macbookController = require('../app/controllers/macbook.controller')

router.get('/', macbookController.show)

module.exports = router