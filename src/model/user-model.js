const mongoose = require('mongoose')
const userSchema = require('../schema/user-schema')

module.exports = mongoose.model('User', userSchema)
