const express = require('express')
const router = express.Router()
const AUTH = require('../controller/auth-controller')
const User = require('../controller/user-controller')
const Bookmark = require('../controller/bookmark-controller')
const Settings = require('../controller/settings-controller')
const OTP = require('../controller/otp-controller')
const ForgetPass = require('../controller/forget-pass-controller')

router
  .route('/')
  .post(User.create)
  .all(AUTH.check)
  .get(User.get)
  .patch(User.modify)
  .delete(User.delete)

router.route('/otp').post(OTP.request)

router
  .route('/forget-pass')
  .all(AUTH.check)
  .post(ForgetPass.request)
  .patch(ForgetPass.restore)

router
  .route('/settings')
  .all(AUTH.check)
  .get(Settings.get)
  .patch(Settings.update)

router
  .route('/bookmarks')
  .all(AUTH.check)
  .get(Bookmark.get)
  .post(Bookmark.add)
  .delete(Bookmark.delete)

module.exports = router
