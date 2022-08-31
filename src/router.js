const express = require('express')
const router = express.Router()
const userRouter = require('./router/user-route')
const verifyEmailRouter = require('./router/verify-email-route')

router.use('/user', userRouter)
router.use('/verify-email', verifyEmailRouter)

module.exports = router
