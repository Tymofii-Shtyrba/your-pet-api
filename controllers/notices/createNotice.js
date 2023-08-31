const { Notice } = require('../../models');
const createError = require('http-errors');
const cloudinary = require('../../cloudinary');
const fs = require('fs/promises');

const createNotice = async (req, res, next) => {
  try {
    const owner = req.userId;
    const { path } = req.file;

    const existingNotice = await Notice.find({ owner });

    if (!existingNotice) {
      throw createError(409, 'such notice already exist');
    }

    const { url: imageURL, public_id: publicId } =
      await cloudinary.uploader.upload(path, {
        folder: 'your-pet-api/notices',
        resource_type: 'image',
      });

    const newNotice = await Notice.create({
      ...req.body,
      owner,
      imageURL,
      publicId,
    });

    await fs.unlink(path);
    res.status(201).json(newNotice);
  } catch (error) {
    next(error);
  }
};

module.exports = createNotice;
