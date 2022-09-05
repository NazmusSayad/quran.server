const mongoose = require('mongoose')
const { hash, compare } = require('bcrypt')
const { BCRYPT_SALT_ROUND } = require('../config/config')
const userSchema = require('../schema/user-schema')

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await hash(this.password, BCRYPT_SALT_ROUND)
  this.passwordModifiedAt = Date.now()
  console.log('Password changed time updated!')
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
    const lastModifiedInMS = this.passwordModifiedAt.getTime()
    const queryTimeInMS = queryTime * 1000
    return lastModifiedInMS > queryTimeInMS
  }
  return false
}

module.exports = mongoose.model('user', userSchema)
