const mongoose = require('mongoose')

module.exports = mongoose.Schema(
  {
    email: {
      type: 'string',
      unique: true,
      required: [true, 'User must have a email.'],
    },
    name: {
      type: 'string',
      required: [true, 'User must have a name.'],
    },
    password: {
      type: 'string',
      required: [true, 'User must have a password.'],
    },
  },
  { versionKey: false }
)
