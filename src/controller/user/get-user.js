module.exports = async (req, res) => {
  try {
    console.log(req.user.select('password'))
    
    const user = { ...req.user._doc }
    delete user.password

    res.success(200, { user })
  } catch (err) {
    res.fail(err)
  }
}
