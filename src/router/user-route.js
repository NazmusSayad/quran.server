const express = require('express')
const route = express.Router()
const controller = require('../controller')

route.use(controller.auth.check)

route
  .route('/')
  .get(controller.user.get)
  .patch(controller.user.modify)
  .delete(controller.user.delete)

route.route('/email').patch(controller.user.updateEmail)
route.route('/password').patch(controller.user.updatePass)

route
  .route('/settings')
  .get(controller.settings.get)
  .patch(controller.settings.update)

route
  .route('/bookmarks')
  .get(controller.bookmarks.get)
  .post(controller.bookmarks.add)
  .delete(controller.bookmarks.delete)

module.exports = route
