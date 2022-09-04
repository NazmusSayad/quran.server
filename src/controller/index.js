module.exports = {
  verifyEmail: {
    request: require('./verify-email/request-otp'),
  },

  auth: {
    check: require('./auth/check-auth-middlewire'),
    login: require('./auth/login-controller'),
    signup: require('./auth/signup-controller'),
  },

  restorePass: {
    request: require('./auth/request-forget-otp'),
    restore: require('./auth/restore-password'),
  },

  user: {
    get: require('./user/get-user'),
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
