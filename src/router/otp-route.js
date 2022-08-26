const express = require('express')
const router = express.Router()
const OTP = require('../controller/otp-controller')

router.route('/').post(OTP.request)

module.exports = router
