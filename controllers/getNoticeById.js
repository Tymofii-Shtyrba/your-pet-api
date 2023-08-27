const { Notice } = require('../models');

const createError = require('http-errors');

const getNoticeById = async (req, res, next) => {
  const { noticeId } = req.params;
  try {
    const oneNoticeCard = await Notice.findById(noticeId);

    if (!oneNoticeCard) {
      return next(createError(404, 'Notice not found'));
    }

    res.status(200).json(oneNoticeCard);
  } catch (error) {
    next(error);
  }
};

module.exports = getNoticeById;
