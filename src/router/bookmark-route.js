const express = require('express')
const router = express.Router()
const Auth = require('../controller/auth-controller')
const Bookmark = require('../controller/bookmark-controller')

router
  .route('/')
  .get(Auth.check, Bookmark.get)
  .post(Auth.check, Bookmark.add)
  .delete(Auth.check, Bookmark.delete)

module.exports = router
