const Joi = require("joi");
const createError = require("http-errors");

const schema = new Joi.object({
  category: Joi.string().required(),
  name: Joi.string().required(),
  date: Joi.string().required(),
  type: Joi.string().required(),
  file: Joi.string(),
  sex: Joi.string().required(),
  location: Joi.string(),
  price: Joi.number(),
  comments: Joi.string(),
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
