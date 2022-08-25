module.exports = async (req, res) => {
  try {
    res.success(201, {})
  } catch (err) {
    res.fail(err.message)
  }
}
