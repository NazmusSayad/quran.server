
const mongoose = require('mongoose')
const OTPHelper = require('./_otp-code-update')
const forgetSchema = require('../schema/forget-pass-schema')

forgetSchema.pre('save', OTPHelper.hashCodeMiddlewire)
forgetSchema.methods.checkCode = OTPHelper.checkCode

module.exports = mongoose.model('otp-forget-pass', forgetSchema)
