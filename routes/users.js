const router = require('express').Router();

const { register, login, updateUser, logout } = require('../controllers');
const {
  isValidUserBody,
  isValidUserUpdateBody,
  isValidToken,
  isValidLoginData,
} = require('../middlewares');

router.post('/register', isValidUserBody, register);

router.post('/login', isValidLoginData, login);

router.patch('/update', isValidToken, isValidUserUpdateBody, updateUser);

router.post('/logout', isValidToken, logout);

module.exports = router;
