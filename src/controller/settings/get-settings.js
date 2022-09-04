module.exports = catchAsync(async (req, res) => {
  throw new ReqError(
    '// TODO: This feature will be added after finishing frontend.',
    501
  )
})
