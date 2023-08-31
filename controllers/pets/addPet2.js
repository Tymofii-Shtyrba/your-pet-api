const { Pet } = require('../../models');
const cloudinary = require('../../cloudinary');
const fs = require('fs/promises');

const addPet2 = async (req, res, next) => {
  try {
    const { userId } = req;
    const { path } = req.file;
    console.log(req.body);

    const { url, public_id } = await cloudinary.uploader.upload(path, {
      folder: 'your-pet-api/pets',
      resource_type: 'image',
    });

    const result = await Pet.create({
      ...req.body,
      owner: userId,
      imageURL: url,
      publicId: public_id,
    });

    await fs.unlink(path);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addPet2;
