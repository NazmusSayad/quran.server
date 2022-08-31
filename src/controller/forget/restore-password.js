const Otp = require('../../model/otp-modal')

module.exports = async (req, res) => {
  try {
    res.success(200, {})
  } catch (err) {
    res.fail(err)
  }
}
