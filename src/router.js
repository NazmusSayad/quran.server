const express = require('express')
const router = express.Router()
const userRouter = require('./router/user-route')
const authRouter = require('./router/auth-route')
const verifyEmailRouter = require('./router/verify-email-route')

router.use('/user', userRouter)
router.use('/auth', authRouter)
router.use('/verify-email', verifyEmailRouter)

module.exports = router
