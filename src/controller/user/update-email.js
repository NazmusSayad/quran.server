const VerifyEmail = require('../../model/verify-email-model')

module.exports = catchAsync(async (req, res) => {
  const { new_email, password, code } = req.body
  if (!(new_email && password && code)) {
    throw new ReqError('Please provide valid email, password and OTP code', 400)
  }

  const verifyEmailReq = await VerifyEmail.findOne({ email: new_email })
  if (!verifyEmailReq || !(await verifyEmailReq.checkCode(code))) {
    throw new ReqError("The verification code you entered isn't correct", 400)
  }

  if (!(await req.user.checkPassword(password))) {
    throw new ReqError('Wrong password', 401)
  }

  req.user.email = new_email
  const user = await req.user.save()

  res.success({ user: user.getSafeInfo() })
})
