const simplifyError = require('./error')

exports.success = function (code = 200, data = null) {
  this.status(code).json({
    status: 'success',
    data,
  })
}

exports.fail = function (...params) {
  const [error, code = 404] = params.reverse()
  const message = simplifyError(error)

  this.status(code).json({
    status: 'fail',
    message,
  })
}
