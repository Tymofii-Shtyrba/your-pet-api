const { isValidObjectId } = require('mongoose');

const createError = require('http-errors');

const isValidId = (req, res, next) => {
  const { petId } = req.params;
  if (!isValidObjectId(petId)) {
    next(createError(400, `${petId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
