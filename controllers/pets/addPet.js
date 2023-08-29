const { Pet } = require('../../models');
const cloudinary = require('../../cloudinary');
const fs = require('fs/promises');

const addPet = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path } = req.file;

    const { url, public_id } = await cloudinary.uploader.upload(path, {
      folder: 'your-pet-api/pets',
      resource_type: 'image',
    });

    const result = await Pet.create({
      ...req.body,
      owner: _id,
      imageURL: url,
      publicId: public_id,
    });

    await fs.unlink(path);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = addPet;
