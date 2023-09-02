const Joi = require('joi');
const createError = require('http-errors');

const schema = new Joi.object({
  name: Joi.string().required(),
  date: Joi.string().required(),
  type: Joi.string().required(),
  comments: Joi.string().required(),
  imageURL: Joi.string(),
});

const isValidPetsBody = (req, res, next) => {
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

module.exports = isValidPetsBody;
