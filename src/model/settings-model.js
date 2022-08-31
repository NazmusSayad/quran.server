const mongoose = require('mongoose')
const settingsSchema = require('../schema/settings-schema')

module.exports = mongoose.model('settings', settingsSchema)
