const { Pet } = require("../models");

const createError = require("http-errors");

const deletePetById = async (req, res) => {
  const { petId } = req.params;

  const result = await Pet.findByIdAndRemove(petId);
  if (!result) {
    createError(404);
  }

  res.status(204).send();
};

module.exports = deletePetById;
