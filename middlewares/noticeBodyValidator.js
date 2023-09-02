const Joi = require('joi').extend(require('@joi/date'));
const createError = require('http-errors');

const schema = new Joi.object({
  category: Joi.string()
    .valid('sell', 'lost-found', 'in-good-hands')
    .required(),
  title: Joi.string().min(2).max(30).required(),
  name: Joi.string().min(2).max(16).required(),
  date: Joi.date().format('DD-MM-YYYY').required(),
  type: Joi.string().required(),
  sex: Joi.string().valid('male', 'female').required(),
  location: Joi.string().required(),
  comments: Joi.string().max(120),
});

const isValidNoticeBody = (req, res, next) => {
  try {
    const { error } = schema.validate(req.body);

    if (error) {
      console.log('yes');
      throw createError(400, error.message);
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = isValidNoticeBody;
