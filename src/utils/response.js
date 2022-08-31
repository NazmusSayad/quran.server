const duplicateError = err => {
  const field = Object.keys(err?.keyValue)
  return [`The given ${field} already exists`]
}
const validationError = err => {
  return Object.values(err?.errors)?.map(error => error?.properties?.message)
}
const castError = err => {
  return `Invalid \`${err?.path}\` input`
}
const simplifyError = err => {
  if (typeof err === 'string') return err
  if (err?.code === 11000) return duplicateError(err)
  if (err?.name === 'CastError') return castError(err)
  if (err?.name === 'ValidationError') return validationError(err)
  return err.message
}

exports.success = function (code, data) {
  this.status(code).json({
    status: 'success',
    data,
  })
}

exports.fail = function (code, error, type = 'fail') {
  if (code >= 500 || error.name === 'MongooseError' || type === 'error') {
    code = 500
    type = 'error'
    error = 'Internal Server Error'
  }

  this.status(code).json({
    status: type,
    message: simplifyError(error),
  })
}
