const register = require('./register');
const login = require('./login');
const updateUser = require('./updateUser');
const logout = require('./logout');
const addPet = require('./addPet');
const deletePetById = require('./deletePetById');
const getUserOwnedPets = require('./getUserOwnedPets');
const getAllPets = require('./getAllPets');
const getPetById = require('./getPetById');
const noticesFilter = require('./noticesFilter');
const updateAvatar = require('./updateAvatar');
const noticeDelete = require('./noticeDelete');
const getNoticeById = require('./getNoticeById');

module.exports = {
  register,
  login,
  updateUser,
  logout,
  addPet,
  deletePetById,
  getUserOwnedPets,
  getAllPets,
  getPetById,
  noticesFilter,
  noticeDelete,
  getNoticeById,
  updateAvatar,
};
