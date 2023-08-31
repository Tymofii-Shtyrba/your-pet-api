const isValidToken = require('./tokenValidator');
const isValidUserBody = require('./userBodyValidator');
const isValidUserUpdateBody = require('./userBodyUpdateValidator');
const isValidLoginData = require('./isValidLoginData');
const isValidPetsBody = require('./petsBodyValidator');
const isValidId = require('./isValidId');
const isValidUserId = require('./isValidUserId');
const upload = require('./imageUpload');
const isValidNoticeId = require('./isValidNoticeId');
const isValidToken2 = require('./tokenValidator2');

module.exports = {
  isValidToken2,
  isValidToken,
  isValidUserBody,
  isValidLoginData,
  isValidPetsBody,
  isValidId,
  isValidUserId,
  isValidUserUpdateBody,
  isValidNoticeId,
  upload,
};
