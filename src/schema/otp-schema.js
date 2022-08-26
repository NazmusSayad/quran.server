const mongoose = require('mongoose')

module.exports = mongoose.Schema(
  {
    email: {
      type: 'string',
      required: true,
      unique: true,
      lowercase: true,
    },
    code: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
)
