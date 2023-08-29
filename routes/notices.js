const router = require('express').Router();

const {
  getNotices,
  noticeDelete,
  getNoticeById,
  getOwnNotice,
  addNoticeToFavorite,
  deleteNoticeFromFavorites,
} = require('../controllers/notices');

const { isValidToken, isValidNoticeId } = require('../middlewares');

router.get('/', getNotices);

router.get('/:noticeId', getNoticeById);

router.get('/byOwner', isValidToken, getOwnNotice);

router.delete('/:noticeId', isValidToken, isValidNoticeId, noticeDelete);

router.patch('/add/:noticeId', isValidToken, addNoticeToFavorite);

router.patch('/remove/:noticeId', isValidToken, deleteNoticeFromFavorites);

module.exports = router;
