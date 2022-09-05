const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, 'User must have a email'],
    },
    name: {
      type: String,
      required: [true, 'User must have a name'],
    },
    password: {
      type: String,
      required: [true, 'User must have a password'],
    },
    passwordModifiedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { versionKey: false }
)

module.exports = userSchema
