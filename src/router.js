const express = require('express')
const router = express.Router()
const otpRouter = require('./router/otp-route')
const userRouter = require('./router/user-route')
const bookmarkRouter = require('./router/bookmark-route')
const settingsRouter = require('./router/settings-route')

router.use('/otp', otpRouter)
router.use('/user', userRouter)
router.use('/bookmark', bookmarkRouter)
router.use('/settings', settingsRouter)

module.exports = router
