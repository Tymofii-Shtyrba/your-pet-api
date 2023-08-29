const addNoticeToFavorite = async (req, res, next) => {
  try {
    const { noticeId } = req.params;
    const user = req.user;

    if (user.favorites.includes(noticeId)) {
      return res
        .status(404)
        .json({ message: 'Notice is already in favorites' });
    }

    user.favorites.push(noticeId);

    await user.save();

    res.status(200).json({ message: 'Notice added to favorites' });
  } catch (error) {
    next(error);
  }
};

module.exports = addNoticeToFavorite;
