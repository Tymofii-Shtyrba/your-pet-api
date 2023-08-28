const mongoose = require('mongoose');

const { Pet } = require('../../models');

const getUserOwnedPets = async (req, res, next) => {
  const { _id } = req.user;

  try {
    const ownPets = await Pet.find({ owner: _id });

    res.status(200).json(ownPets);
  } catch (error) {
    next(error);
  }
};
module.exports = getUserOwnedPets;
