const { User } = require('../../models');
// const createError = require('http-errors');
// const bcrypt = require('bcryptjs');

const updateUser = async (req, res, next) => {
  // const { _id } = req.user;
  const { body, userId } = req;
  
  console.log("🚀 req:", body)

  try {
    // if (password) {
    //   const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    //   otherFields.password = hashPassword;
    // }

    const result = await User.findByIdAndUpdate(userId, body, {
      new: true,
    });

    // if (!result) {
    //   throw createError(404);
    // }
console.log("result:", result)
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateUser;
