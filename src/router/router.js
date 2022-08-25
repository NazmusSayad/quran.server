const express = require('express')
const userRouter = require('./user-route')
const otpRouter = require('./otp-route')
const router = express.Router()

router.use('/user', userRouter)
router.use('/otp', otpRouter)

module.exports = router
