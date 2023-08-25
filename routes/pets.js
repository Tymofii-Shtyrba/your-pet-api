const router = require("express").Router();

const {
  addPet,
  deletePetById,
  updatePetById,
  getUserOwnedPets,
} = require("../controllers");

const {
  isValidPetsBody,
  isValidToken,
  isValidId,
  isValidUserId,
} = require("../middlewares");

router.post("/", isValidToken, isValidPetsBody, addPet);

router.delete("/:petId", isValidToken, isValidId, deletePetById);

router.put("/:petId", isValidToken, isValidId, isValidPetsBody, updatePetById);

router.get("/:userId", isValidToken, isValidUserId, getUserOwnedPets);

module.exports = router;
