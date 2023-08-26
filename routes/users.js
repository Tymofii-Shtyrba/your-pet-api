const router = require('express').Router();

const { register, login, updateUserById, logout } = require('../controllers');
const {
  isValidUserBody,
  isValidUserUpdateBody,
  isValidToken,
  isValidLoginData,
} = require('../middlewares');

router.post('/register', isValidUserBody, register);

router.post('/login', isValidLoginData, login);

router.put('/update', isValidToken, isValidUserUpdateBody, updateUserById);

router.post('/logout', isValidToken, logout);

module.exports = router;
