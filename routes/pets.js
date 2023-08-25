const router = require("express").Router();

const {
  addPet,
  deletePetById,
  updatePetById,
  getUserOwnedPets,
  getAllPets,
  getPetById,
} = require("../controllers");

const {
  isValidPetsBody,
  isValidToken,
  isValidId,
  isValidUserId,
} = require("../middlewares");

router.get("/", getAllPets);

router.get("/:petId", getPetById);

router.post("/", isValidToken, isValidPetsBody, addPet);

router.delete("/:petId", isValidToken, isValidId, deletePetById);

router.put("/:petId", isValidToken, isValidId, isValidPetsBody, updatePetById);

router.get("/:userId", isValidToken, isValidUserId, getUserOwnedPets);

module.exports = router;
