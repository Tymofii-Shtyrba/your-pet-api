const Joi = require('joi');
const createError = require('http-errors');

const schema = new Joi.object({
  name: Joi.string().min(2).max(16),
  email: Joi.string().email(),
  birthday: Joi.string().pattern(/^\d{2}\.\d{2}\.\d{4}$/),
  phone: Joi.string().pattern(/^\+\d{12}$/),
  city: Joi.string().min(2).max(16),
});

const isValidUserUpdateBody = (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);

    if (error) {
      next(createError(400, error.message));
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isValidUserUpdateBody;
