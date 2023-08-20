const jwt = require('jsonwebtoken');
const { User } = require('../models');
const createError = require('http-errors');

const { SECRET_KEY } = process.env;

const isValidToken = async (req, res, next) => {
	try {
		const { authorization = '' } = req.headers;
		const [bereare, token] = authorization.split(' ');

		if (!bereare) {
			throw createError(401, 'Not authorized');
		}

		const { id } = jwt.verify(token, SECRET_KEY);
		const user = await User.findById(id);

		if (!user || user.token == !token) {
			throw createError(401, 'Not authorized');
		}
	} catch (error) {
		next(error);
	}
};

module.exports = isValidToken;
