const createError = require('http-errors');
const { User } = require('../models');
// const { v4: uuidv4 } = require('uuid');
// const sgMail = require('@sendgrid/mail');
const bcrypt = require('bcryptjs');

// const createLetter = require('../templates/letter');

// const { SENDGRID_API_KEY } = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

const register = async (req, res, next) => {
	const { email, password, name } = req.body;

	try {
		const existUser = await User.findOne({ email });

		if (existUser) {
			throw createError(409);
		}

		const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

		await User.create({
			name,
			email,
			password: hashPassword,
			avatarURL: null,
		});
		res.status(201).json({ message: 'New account created' });
	} catch (error) {
		next(error);
	}
};

module.exports = register;
