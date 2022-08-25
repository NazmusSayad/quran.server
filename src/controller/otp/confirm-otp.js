module.exports = async (req, res) => {
  try {
    const { email, otp } = req.body

    res.success({
      user: email,
    })
  } catch (err) {
    res.fail(err.message)
  }
}
