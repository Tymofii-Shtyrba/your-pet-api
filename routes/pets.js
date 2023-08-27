const router = require('express').Router();

const {
  addPet,
  deletePetById,
  getUserOwnedPets,
  getAllPets,
  getPetById,
} = require('../controllers');

const {
  isValidPetsBody,
  isValidToken,
  isValidId,
  isValidUserId,
} = require('../middlewares');

router.get('/all', getAllPets);

router.post('/', isValidToken, isValidPetsBody, addPet);

router.get('/:userId', isValidToken, isValidUserId, getUserOwnedPets);

router.get('/:petId', getPetById);

router.delete('/:petId', isValidToken, isValidId, deletePetById);

module.exports = router;
