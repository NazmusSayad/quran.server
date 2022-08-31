const express = require('express')
const router = express.Router()
const userRouter = require('./router/user-route')

router.use('/user', userRouter)

module.exports = router
