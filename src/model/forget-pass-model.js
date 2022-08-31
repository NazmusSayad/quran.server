const mongoose = require('mongoose')
const forgetSchema = require('../schema/forget-pass-schema')

module.exports = mongoose.model('otp-forget-pass', forgetSchema)
