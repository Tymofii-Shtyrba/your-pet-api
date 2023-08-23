const { Pet } = require("../models");

const createError = require("http-errors");

const updatePetById = async (req, res) => {
  const { petId } = req.params;

  const result = await Pet.findByIdAndUpdate(petId, req.body);
  if (!result) {
    createError(404);
  }
  res.json(result);
};

module.exports = updatePetById;
