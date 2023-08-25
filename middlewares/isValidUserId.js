const { isValidObjectId } = require("mongoose");

const createError = require("http-errors");

const isValidUserId = (req, res, next) => {
  const { userId } = req.params;
  if (!isValidObjectId(userId)) {
    next(createError(400, `${userId} is not valid id`));
  }
  next();
};

module.exports = isValidUserId;
