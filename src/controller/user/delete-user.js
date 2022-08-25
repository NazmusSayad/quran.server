module.exports = async (req, res) => {
  try {
    res.success(204, {})
  } catch (err) {
    res.fail(err.message)
  }
}
