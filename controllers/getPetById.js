const { Pet } = require("../models");

const createError = require("http-errors");

const getPetById = async (req, res, next) => {
  try {
    const { petId } = req.params;
    const onePetCard = await Pet.findById(petId);

    if (!onePetCard) {
      next(createError(404, "Pet not found"));
    }
    res.status(200).json(onePetCard);
  } catch (error) {
    next(error);
  }
};

module.exports = getPetById;
