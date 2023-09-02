const { User, Notice } = require('../../models');

const getOwnFavoriteNotices = async (req, res, next) => {
  const { _id } = req.user;

  try {
    const user = await User.findById(_id);

    const { favorites } = user;

    const favoriteNotices = [];

    const promises = favorites.map(async (favoriteId) => {
      const favoriteNotice = await Notice.findById(favoriteId);
      if (favoriteNotice) {
        favoriteNotices.push(favoriteNotice);
      }
    });

    await Promise.all(promises);

    res.status(200).json(favoriteNotices);
  } catch (error) {
    next(error);
  }
};

module.exports = getOwnFavoriteNotices;
