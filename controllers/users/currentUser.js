const createError = require('http-errors');
const { User } = require('../../models');
const { Pet } = require('../../models');

const currentUser = async (req, res, next) => {
  try {
    const { email, _id } = req.user;
    console.log(email);

    const userInfo = await User.findById(_id);
    console.log(userInfo);
    if (!userInfo) {
      throw createError(404, 'User not fund');
    }

    const petsInfo = await Pet.find({ owner: _id }).sort({ createdAt: -1 });

    res.status(200).json({ userInfo, petsInfo });
  } catch (error){
    next(error);
  }
};

module.exports = currentUser;