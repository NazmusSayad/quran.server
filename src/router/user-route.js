const express = require('express')
const router = express.Router()
const controller = require('../controller')

router
  .route('/')
  .all(controller.auth.check)
  .get(controller.user.get)
  .patch(controller.user.modify)
  .delete(controller.user.delete)

router
  .route('/settings') // Enable auth in prod mode :)
  // .all(controller.auth.check)
  .get(controller.settings.get)
  .patch(controller.settings.update)

router
  .route('/bookmarks')
  .all(controller.auth.check)
  .get(controller.bookmarks.get)
  .post(controller.bookmarks.add)
  .delete(controller.bookmarks.delete)

module.exports = router
