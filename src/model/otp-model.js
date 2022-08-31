const mongoose = require('mongoose')
const otpSchema = require('../schema/otp-schema')

module.exports = mongoose.model('Otp', otpSchema)
