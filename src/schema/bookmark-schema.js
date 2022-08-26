const mongoose = require('mongoose')

module.exports = mongoose.Schema(
  {
    verses: {
      type: Object,
    },

    surahs: {
      type: Object,
    },
  },
  { versionKey: false }
)
