const mongoose = require('mongoose')
const OTPHelper = require('./_otp-code-update')
const verifyEmailSchema = require('../schema/verify-email-schema')

verifyEmailSchema.pre('save', OTPHelper.hashCodeMiddlewire)
verifyEmailSchema.methods.checkCode = OTPHelper.checkCode

module.exports = mongoose.model('otp-verify-email', verifyEmailSchema)
