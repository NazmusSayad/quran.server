module.exports = async (req, res) => {
  try {
    throw new Error('Not found!')
  } catch (err) {
    res.fail(err)
  }
}
