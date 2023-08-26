const { User } = require('../models');

const createError = require('http-errors');

const updateUserById = async (req, res, next) => {
  const { _id } = req.user;

  const result = await User.findByIdAndUpdate(_id, req.body);

  if (!result) {
    next(createError(404));
  }

  res.json(result);
};

module.exports = updateUserById;
