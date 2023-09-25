const express = require('express')
const router = express.Router()
const AccessController = require('../controller/access.controller')
const asyncHandler = require('express-async-handler')

router.post('/user/login', asyncHandler(AccessController.login))

router.post('/user/register', asyncHandler(AccessController.register))

module.exports = router
