const router = require("express").Router();

const { addPet, deletePetById, updatePetById } = require("../controllers");

const { isValidPetsBody, isValidToken, isValidId } = require("../middlewares");

router.post("/", isValidToken, isValidPetsBody, addPet);

router.delete("/:petId", isValidToken, isValidId, deletePetById);

router.put("/:petId", isValidToken, isValidId, isValidPetsBody, updatePetById);

module.exports = router;
