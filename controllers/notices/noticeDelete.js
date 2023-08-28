const { Notice } = require('../../models');

const createHttpError = require('http-errors');

const noticeDelete = async (req, res, next) => {
  const { noticeId } = req.params;

  try {
    const notice = await Notice.findById(noticeId);

    if (!notice) {
      return next(createHttpError(404));
    }

    if (notice.owner.toString() !== req.user._id.toString()) {
      return next(
        createHttpError(403, 'You are not authorized to delete this notice')
      );
    }

    const result = await Notice.findByIdAndRemove(noticeId);
    if (!result) {
      return next(createHttpError(404));
    }

    res.status(204).send();
  } catch (error) {
    return next(createHttpError(500, 'Failed to delete the notice'));
  }
};

module.exports = noticeDelete;
