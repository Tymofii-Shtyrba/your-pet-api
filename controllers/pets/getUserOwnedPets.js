const mongoose = require('mongoose');

const { User } = require('../../models');

const getUserOwnedPets = (req, res) => {
  const userObjectId = new mongoose.Types.ObjectId(req.params.userId);

  User.aggregate([
    { $match: { _id: userObjectId } },
    {
      $lookup: {
        from: 'pets',
        localField: '_id',
        foreignField: 'owner',
        as: 'pets',
      },
    },
  ])
    .then((result) => {
      res.json(result);
    })
    .catch(() => {
      res.status(500).json({
        error: 'An error occurred while fetching user and pets data.',
      });
    });
};

module.exports = getUserOwnedPets;
