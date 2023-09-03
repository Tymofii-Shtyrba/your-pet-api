const toggleNoticeInFavorites = async (req, res, next) => {
  try {
    const { noticeId } = req.params;
    const user = req.user;

    if (user.favorites.includes(noticeId)) {
      user.favorites.pull(noticeId);

      await user.save();

      return res.status(200).json({ message: 'Notice removed from favorites' });
    }

    user.favorites.push(noticeId);

    await user.save();

    res.status(200).json({ message: 'Notice added to favorites' });
  } catch (error) {
    next(error);
  }
};

module.exports = toggleNoticeInFavorites;
