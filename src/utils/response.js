exports.success = function (...params) {
  const [data, code = 200] = params.reverse()

  this.status(code).json({
    status: 'success',
    ...data,
  })
}

exports.fail = function (...params) {
  const [message, code = 404] = params.reverse()

  this.status(code).json({
    status: 'fail',
    message,
  })
}
