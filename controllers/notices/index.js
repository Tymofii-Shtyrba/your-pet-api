const getNotices = require('./getNotices');
const noticeDelete = require('./noticeDelete');
const getNoticeById = require('./getNoticeById');
const getOwnNotice = require('./getOwnNotice');
const toggleNoticeInFavorites = require('./toggleNoticeInFavorites');
const createNotice = require('./createNotice');
const getOwnFavoriteNotices = require('./getOwnFavoriteNotices');

module.exports = {
  getNotices,
  noticeDelete,
  getNoticeById,
  getOwnNotice,
  toggleNoticeInFavorites,
  createNotice,
  getOwnFavoriteNotices,
};
