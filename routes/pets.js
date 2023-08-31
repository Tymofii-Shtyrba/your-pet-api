const router = require('express').Router();

const {
  addPet,
  deletePetById,
  getUserOwnedPets,
  addPet2,
} = require('../controllers/pets');

const {
  isValidPetsBody,
  isValidToken,
  isValidId,
  upload,
  isValidToken2,
} = require('../middlewares');

// router.post('/', isValidToken, upload.single('image'), isValidPetsBody, addPet);
router.post(
  '/',
  isValidToken2,
  upload.single('image'),
  isValidPetsBody,
  addPet2
);

router.get('/', isValidToken, getUserOwnedPets);

router.delete('delete/:petId', isValidToken, isValidId, deletePetById);
router.delete('/:petId', isValidToken, isValidId, deletePetById);

module.exports = router;
