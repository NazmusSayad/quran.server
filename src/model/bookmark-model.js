const mongoose = require('mongoose')
const bookmarkSchema = require('../schema/bookmark-schema')

module.exports = mongoose.model('Bookmark', bookmarkSchema)
