const { Pet } = require('../models');

const addPet = async (req, res) => {
  try {
    const { user } = req;

    const result = await Pet.create({ ...req.body, owner: user._id });

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = addPet;
