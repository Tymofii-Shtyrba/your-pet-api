const deleteNoticeFromFavorites = async (req, res, next) => {
  try {
    const { noticeId } = req.params;
    const user = req.user;

    if (!user.favorites.includes(noticeId)) {
      return res.status(404).json({ message: 'Notice was not in favorites' });
    }

    user.favorites.pull(noticeId);

    await user.save();

    return res.status(200).json({ message: 'Notice removed from favorites' });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteNoticeFromFavorites;
