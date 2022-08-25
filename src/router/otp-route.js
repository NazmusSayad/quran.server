const express = require('express')
const Otp = require('../controller/otp-controller')
const router = express.Router()

router.route('/').post(Otp.request).patch(Otp.confirm)

module.exports = router
