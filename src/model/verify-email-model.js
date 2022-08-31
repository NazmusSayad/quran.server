const mongoose = require('mongoose')
const verifyEmailSchema = require('../schema/verify-email-schema')

module.exports = mongoose.model('otp-verify-email', verifyEmailSchema)
