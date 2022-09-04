const express = require('express')
const router = express.Router()
const controller = require('../controller')

router.route('/login').post(controller.auth.login)
router.route('/signup').post(controller.auth.signup)
router
  .route('/forget-pass')
  .post(controller.restorePass.request)
  .put(controller.restorePass.restore)

module.exports = router
