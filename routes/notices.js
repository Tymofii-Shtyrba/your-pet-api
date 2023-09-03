const router = require('express').Router();

const {
  getNotices,
  noticeDelete,
  getNoticeById,
  getOwnNotice,
  toggleNoticeInFavorites,

  createNotice,
  getOwnFavoriteNotices,
} = require('../controllers/notices');

const {
  isValidToken,
  isValidNoticeId,
  isValidToken2,
  upload,
  isValidNoticeBody,
} = require('../middlewares');

router.get('/byOwner', isValidToken, getOwnNotice);
router.get('/favorites', isValidToken, getOwnFavoriteNotices);
router.get('/', getNotices);

router.post(
  '/',
  isValidToken2,
  upload.single('image'),
  isValidNoticeBody,
  createNotice
);

router.get('/:noticeId', isValidNoticeId, getNoticeById);
router.delete('/:noticeId', isValidToken, isValidNoticeId, noticeDelete);
router.patch('/add/:noticeId', isValidToken, toggleNoticeInFavorites);

module.exports = router;
