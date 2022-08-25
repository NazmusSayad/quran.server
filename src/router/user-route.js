const express = require('express')
const User = require('../controller/user-controller')
const router = express.Router()

router
  .route('/')
  .get(User.get)
  .post(User.create)
  .patch(User.verify, User.modify)
  .delete(User.verify, User.delete)

module.exports = router
