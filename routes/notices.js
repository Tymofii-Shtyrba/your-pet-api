const router = require('express').Router();

const {
  noticesFilter,
  noticeDelete,
  getNoticeById,
} = require('../controllers');

const { isValidToken, isValidNoticeId } = require('../middlewares');

router.get('/filter', noticesFilter);

router.get('/:noticeId', getNoticeById);

router.delete('/:noticeId', isValidToken, isValidNoticeId, noticeDelete);

module.exports = router;
