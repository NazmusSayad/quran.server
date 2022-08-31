const User = require('../../model/user-model')

module.exports = async (req, res) => {
  try {
    res.success(200, {})
  } catch (err) {
    res.fail(404, err)
  }
}
