const Joi = require('joi');
const createError = require('http-errors');

const schema = new Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).max(16).required(),
});

const isValidLoginData = (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);

    if (error) {
      throw createError(400, error.message);
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isValidLoginData;
