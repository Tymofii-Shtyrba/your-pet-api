const createError = require('http-errors');
const { User } = require('../../models');
// const { v4: uuidv4 } = require('uuid');
// const sgMail = require('@sendgrid/mail');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;



// const createLetter = require('../templates/letter');

// const { SENDGRID_API_KEY } = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

const register = async (req, res, next) => {
  const { email, password, name } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (existUser) {
      throw createError(409, 'Conflict');
    }

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const user = await User.create({
      name,
      email,
      password: hashPassword,
      avatarURL: null,
    });
        const token = jwt.sign(user._id, SECRET_KEY, { expiresIn: '23h' });

    res.status(201).json({ 
      token,
      user: {
        email: user.email,
      },
      message: 'New account created' });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
