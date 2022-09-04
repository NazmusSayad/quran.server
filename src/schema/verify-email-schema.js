const mongoose = require('mongoose')
const { VERIFY_EMAIL_EXPIRE_DURATION } = require('../config/config')

module.exports = mongoose.Schema(
  {
    code: {
      type: 'string',
      required: true,
    },
    expireAt: {
      required: true,
      type: Date,
      default: Date.now,
      expires: VERIFY_EMAIL_EXPIRE_DURATION,
    },
  },
  { versionKey: false }
)
