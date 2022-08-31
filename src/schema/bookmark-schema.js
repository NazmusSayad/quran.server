const mongoose = require('mongoose')

module.exports = mongoose.Schema(
  {
    verses: {
      type: Object,
      default: {},
    },

    surahs: {
      type: Object,
      default: {},
    },
  },
  { versionKey: false }
)
