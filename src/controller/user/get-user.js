module.exports = async (req, res) => {
  try {
    res.success({})
  } catch (err) {
    res.fail(err.message)
  }
}
