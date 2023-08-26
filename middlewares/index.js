const isValidToken = require('./tokenValidator');
const isValidUserBody = require('./userBodyValidator');
const isValidUserUpdateBody = require('./userBodyUpdateValidator');
const isValidLoginData = require('./isValidLoginData');
const isValidPetsBody = require('./petsBodyValidator');
const isValidId = require('./isValidId');
const isValidUserId = require('./isValidUserId');
const upload = require('./imageUpload');

module.exports = {
  isValidToken,
  isValidUserBody,
  isValidLoginData,
  isValidPetsBody,
  isValidId,
  isValidUserId,
  isValidUserUpdateBody,
  upload,
};
