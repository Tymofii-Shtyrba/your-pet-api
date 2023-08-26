const router = require('express').Router();

const {
  addPet,
  deletePetById,
  getUserOwnedPets,
  getAllPets,
  getPetById,
  searchPets,
} = require('../controllers');

const {
  isValidPetsBody,
  isValidToken,
  isValidId,
  isValidUserId,
} = require('../middlewares');

router.get('/all', getAllPets);

router.get('/search', searchPets);

router.post('/', isValidToken, isValidPetsBody, addPet);

router.get('/:petId', getPetById);

router.delete('/:petId', isValidToken, isValidId, deletePetById);

router.get('/:userId', isValidToken, isValidUserId, getUserOwnedPets);

module.exports = router;
