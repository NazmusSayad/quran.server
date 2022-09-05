const mongoose = require('mongoose')
const { hash, compare } = require('bcrypt')
const { BCRYPT_SALT_ROUND } = require('../config/config')
const userSchema = require('../schema/user-schema')

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await hash(this.password, BCRYPT_SALT_ROUND)
  this.passwordModifiedAt = Date.now()
  next()
})

userSchema.methods.checkPassword = function (data) {
  return compare(data, this.password)
}

userSchema.methods.getSafeInfo = function () {
  return {
    name: this.name,
    email: this.email,
  }
}

userSchema.methods.passwordChangedAfter = function (queryTime) {
  if (this?.passwordModifiedAt) {
    const lastModified = Math.floor(this.passwordModifiedAt.getTime() / 1000)
    return lastModified > queryTime
  }
  return false
}

module.exports = mongoose.model('user', userSchema)
