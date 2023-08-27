const { isValidObjectId } = require('mongoose');

const createError = require('http-errors');

const isValidNoticeId = (req, res, next) => {
  const { noticeId } = req.params;
  if (!isValidObjectId(noticeId)) {
    next(createError(400, `${noticeId} is not valid id`));
  }
  next();
};

module.exports = isValidNoticeId;
