module.exports = async (req, res) => {
  try {
    for (let key in req.body) {
      req.user[key] = req.body[key]
    }

    const user = await req.user.save()
    res.success(202, { user })
  } catch (err) {
    res.fail(err)
  }
}
