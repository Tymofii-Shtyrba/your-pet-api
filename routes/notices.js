const router = require('express').Router();

const {
  getNotices,
  noticeDelete,
  getNoticeById,
  getOwnNotice,
} = require('../controllers/notices');

const { isValidToken, isValidNoticeId } = require('../middlewares');

router.get('/filter', getNotices);

router.get('/:noticeId', getNoticeById);

router.get('/byOwner', isValidToken, getOwnNotice);

router.delete('/:noticeId', isValidToken, isValidNoticeId, noticeDelete);

module.exports = router;
