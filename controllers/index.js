const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const addPet = require("./addPet");
const deletePetById = require("./deletePetById");
const updatePetById = require("./updatePetById");

module.exports = {
  register,
  login,
  logout,
  addPet,
  deletePetById,
  updatePetById,
};
