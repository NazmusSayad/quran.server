const mongoose = require('mongoose')
const settingsSchema = require('./settings-schema')
const bookmarkSchema = require('./bookmark-schema')

module.exports = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      immutable: true,
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
    settings: {
      type: mongoose.Types.ObjectId,
      ref: 'Settings',
    },
    bookmarks: {
      type: mongoose.Types.ObjectId,
      ref: 'Bookmark',
    },
  },
  { versionKey: false }
)
