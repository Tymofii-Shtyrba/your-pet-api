const register = require('./register');
const login = require('./login');
const updateUser = require('./updateUser');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar');
const currentUser = require('./currentUser');

module.exports = {
  register,
  login,
  updateUser,
  logout,
  updateAvatar,
  currentUser,
};
