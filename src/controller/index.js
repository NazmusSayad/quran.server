module.exports = {
  Auth: require('./auth/check-auth'),

  verifyEmail: {
    request: require('./verify-email/request-otp'),
  },

  restorePass: {
    request: require('./restore-pass/request-forget-otp'),
    restore: require('./restore-pass/restore-password'),
  },

  user: {
    get: require('./user/get-user'),
    create: require('./user/create-user'),
    modify: require('./user/modify-user'),
    delete: require('./user/delete-user'),
  },

  settings: {
    get: require('./settings/get-settings'),
    update: require('./settings/update-settings'),
  },

  bookmarks: {
    get: require('./bookmark/get-bookmark'),
    add: require('./bookmark/add-bookmark'),
    delete: require('./bookmark/delete-bookmark'),
  },
}
