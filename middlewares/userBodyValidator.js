const Joi = require('joi');
const createError = require('http-errors');

const schema = new Joi.object({
	name: Joi.string().min(2).max(16).required(),
	email: Joi.string().email().required(),
	password: Joi.string()
		.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/)
		.required(),
});

const isValidUserBody = (req, res, next) => {
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

module.exports = isValidUserBody;
