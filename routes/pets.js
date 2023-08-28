const router = require('express').Router();

const {
  addPet,
  deletePetById,
  getUserOwnedPets,
} = require('../controllers/pets');

const {
  isValidPetsBody,
  isValidToken,
  isValidId,
  isValidUserId,
} = require('../middlewares');

router.post('/', isValidToken, isValidPetsBody, addPet);

router.get('/', isValidToken, getUserOwnedPets);

router.delete('/:petId', isValidToken, isValidId, deletePetById);

module.exports = router;
