module.exports = async (req, res) => {
  try {
    throw new Error('404 not found')
  } catch (err) {
    res.fail(404, err)
  }
}
