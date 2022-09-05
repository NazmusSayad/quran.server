module.exports = catchAsync(async (req, res) => {
  const { name } = req.body
  if (name) req.user.name = name

  const user = await req.user.save()
  res.success({ user: user.getSafeInfo() })
})
