const jwt = require('jsonwebtoken');
const { User } = require('../models');
const createError = require('http-errors');

const { SECRET_KEY } = process.env;

const isValidToken = async (req, res, next) => {
  try {
    const { authorization = '' } = req.headers;
    const [bearer, token] = authorization.split(' ');

    if (!bearer) {
      throw createError(401, 'Not authorized');
    }

    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token || user.token !== token) {
      throw createError(401, 'Not authorized');
    }

    req.user = user;
    next();
  } catch (error) {
    return next(createError(401));
  }
};

module.exports = isValidToken;
