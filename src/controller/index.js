module.exports = {
  verifyEmail: {
    request: require('./verify-email/request-otp'),
  },

  auth: {
    check: require('./auth/check-auth-middlewire'),
    login: require('./auth/user-login'),
    signup: require('./auth/user-signup'),
  },

  restorePass: {
    request: require('./auth/request-forget-otp'),
    restore: require('./auth/reset-password'),
  },

  user: {
    get: require('./user/get-user'),
    delete: require('./user/delete-user'),
    modify: require('./user/modify-user'),
    updateEmail: require('./user/update-email'),
    updatePass: require('./user/update-password'),
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
