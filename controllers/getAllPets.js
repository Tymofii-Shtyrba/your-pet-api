const { Pet } = require('../models');

const createError = require('http-errors');

const getAllPets = async (req, res, next) => {
  try {
    const result = await Pet.find();

    if (result.length === 0) {
      next(createError(404, 'No pets found'));
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAllPets;
