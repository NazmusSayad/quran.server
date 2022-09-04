const jsonwebtoken = require('jsonwebtoken')

exports.generate = id => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}

exports.verify = token => {
  return jsonwebtoken.verify(token, process.env.JWT_SECRET)
}

exports.decode = token => {
  return jsonwebtoken.decode(token, {})
}
