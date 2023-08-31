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
  upload,
} = require('../middlewares');

router.post('/', isValidToken, upload.single('image'), isValidPetsBody, addPet);

router.get('/', isValidToken, getUserOwnedPets);

router.delete('delete/:petId', isValidToken, isValidId, deletePetById);
router.delete('/:petId', isValidToken, isValidId, deletePetById);

module.exports = router;
