module.exports = async (req, res) => {
  try {
    res.success(202, {})
  } catch (err) {
    res.fail(err.message)
  }
}
