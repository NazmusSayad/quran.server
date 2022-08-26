const express = require('express')
const router = express.Router()
const Auth = require('../controller/auth-controller')
const User = require('../controller/user-controller')

router
  .route('/')
  .post(User.create)
  .get(Auth.check, User.get)
  .patch(Auth.check, User.modify)
  .delete(Auth.check, User.delete)

module.exports = router
