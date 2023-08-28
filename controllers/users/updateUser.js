const { User } = require('../../models');
const createError = require('http-errors');
const bcrypt = require('bcryptjs');

const updateUser = async (req, res, next) => {
  const { _id } = req.user;
  const { password, ...otherFields } = req.body;

  try {
    if (password) {
      const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      otherFields.password = hashPassword;
    }

    const result = await User.findByIdAndUpdate(_id, otherFields, {
      new: true,
    });

    if (!result) {
      throw createError(404);
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateUser;
