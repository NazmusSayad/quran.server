const { hash, compare } = require('bcrypt')
const { BCRYPT_SALT_ROUND2 } = require('../config/config')

exports.hashCodeMiddlewire = async function (next) {
  if (!this.isModified('code')) return next()
  this.code = await hash(this.code, BCRYPT_SALT_ROUND2)
  next()
}

exports.checkCode = function (data) {
  return compare(data, this.code)
}
