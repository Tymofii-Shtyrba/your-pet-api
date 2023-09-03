const { User } = require('../../models');

const updateUser = async (req, res, next) => {
  const { body, userId } = req;
  try {
    const result = await User.findByIdAndUpdate(userId, body, {
      new: true,
    });
console.log("result:", result)
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateUser;
