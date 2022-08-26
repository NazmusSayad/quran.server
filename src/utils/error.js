const handleDuplicateError = err => {
  const field = Object.keys(err.keyValue)
  return [`The given ${field} already exists.`]
}

const handleValidationError = err => {
  return Object.values(err.errors)?.map(error => error?.properties?.message)
}

module.exports = err => {
  if (err?.code === 11000) return handleDuplicateError(err)
  if (err.name === 'ValidationError') return handleValidationError(err)
  return [err.message]
}
