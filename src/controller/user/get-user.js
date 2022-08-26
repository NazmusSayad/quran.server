module.exports = async (req, res) => {
  try {
    const user = { ...req.user }
    delete user.password

    res.success(200, { user })
  } catch (err) {
    res.fail(err)
  }
}
