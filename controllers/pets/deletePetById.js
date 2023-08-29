const { Pet } = require('../../models');
const cloudinary = require('../../cloudinary');

const createError = require('http-errors');

const deletePetById = async (req, res) => {
  const { petId } = req.params;

  const result = await Pet.findByIdAndRemove(petId);
  if (!result) {
    createError(404);
  }

  await cloudinary.uploader.destroy(result.publicId);
  res.status(204).send();
};

module.exports = deletePetById;
