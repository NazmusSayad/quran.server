module.exports = async (req, res) => {
  try {
    await req.user.delete()
    res.success(204)
  } catch (err) {
    res.fail(err)
  }
}
