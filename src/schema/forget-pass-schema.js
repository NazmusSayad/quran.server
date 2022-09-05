const mongoose = require('mongoose')
const { FORGET_PASS_OTP_EXPIRE_DURATION } = require('../config/config')

module.exports = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      expires: FORGET_PASS_OTP_EXPIRE_DURATION,
      required: true,
      select: false,
    },
  },
  { versionKey: false }
)
