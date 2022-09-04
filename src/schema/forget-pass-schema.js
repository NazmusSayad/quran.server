const mongoose = require('mongoose')
const { FORGET_PASS_OTP_EXPIRE_DURATION } = require('../config/config')

module.exports = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      unique: true,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      expires: FORGET_PASS_OTP_EXPIRE_DURATION,
      required: true,
    },
  },
  { versionKey: false }
)
