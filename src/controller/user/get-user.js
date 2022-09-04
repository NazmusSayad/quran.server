module.exports = catchAsync(async (req, res) => {
  res.success({ user: req.user.getSafeInfo() })
})
