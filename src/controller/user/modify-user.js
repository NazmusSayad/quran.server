const filterRequestBody = require('./helper/filter-request-body.')

module.exports = catchAsync(async (req, res) => {
  const body = filterRequestBody(req.body)
  for (let key in body) req.user[key] = body[key]

  const user = await req.user.save()
  res.success({ user: user.getSafeInfo() })
})
