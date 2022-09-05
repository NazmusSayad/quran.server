module.exports = catchAsync(async (req, res) => {
  const { current_password, new_password } = req.body
  if (!current_password || !new_password) {
    throw new ReqError('Please provide valid information', 400)
  }

  if (!(await req.user.checkPassword(current_password))) {
    throw new ReqError('Your current password is wrong', 401)
  }

  if (current_password === new_password) {
    throw new ReqError('Please enter a different password', 400)
  }

  req.user.password = new_password
  const user = await req.user.save()
  res.success({ user: user.getSafeInfo() })
})
