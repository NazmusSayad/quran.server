const express = require('express')
const router = express.Router()
const controller = require('../controller')

router
  .route('/')
  .post(controller.user.create)
  .all(controller.Auth)
  .get(controller.user.get)
  .patch(controller.user.modify)
  .delete(controller.user.delete)

router
  .route('/forget-pass')
  .post(controller.restorePass.request)
  .patch(controller.restorePass.restore)

router
  .route('/settings')
  .all(controller.Auth)
  .get(controller.settings.get)
  .patch(controller.settings.update)

router
  .route('/bookmarks')
  .all(controller.Auth)
  .get(controller.bookmarks.get)
  .post(controller.bookmarks.add)
  .delete(controller.bookmarks.delete)

module.exports = router
