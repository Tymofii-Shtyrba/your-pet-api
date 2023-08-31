const getNotices = require('./getNotices');
const noticeDelete = require('./noticeDelete');
const getNoticeById = require('./getNoticeById');
const getOwnNotice = require('./getOwnNotice');
const addNoticeToFavorite = require('./addNoticeToFavorite');
const deleteNoticeFromFavorites = require('./deleteNoticeFromFavorites');
const createNotice = require('./createNotice');

module.exports = {
  getNotices,
  noticeDelete,
  getNoticeById,
  getOwnNotice,
  addNoticeToFavorite,
  deleteNoticeFromFavorites,
  createNotice,
};
