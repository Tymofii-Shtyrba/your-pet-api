const fs = require('fs/promises');
const cloudinary = require('../cloudinary');
const { User } = require('../models');

const updateAvatar = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { path } = req.file;

    const { avatarURL, avatarPublicId } = await User.findById(_id);

    if (avatarURL) {
      await cloudinary.uploader.destroy(avatarPublicId);
    }

    const { url, public_id } = await cloudinary.uploader.upload(path, {
      folder: 'your-pet-api/avatars',
      resource_type: 'image',
    });

    await User.findByIdAndUpdate(_id, {
      avatarURL: url,
      avatarPublicId: public_id,
    });

    await fs.unlink(path);
    res.json({ avatarURL: url });
  } catch (error) {
    next(error);
  }
};

module.exports = updateAvatar;
