const router = require('express').Router();

const {
  register,
  login,
  updateUser,
  logout,
  updateAvatar,
} = require('../controllers/users');

const {
  isValidUserBody,
  isValidUserUpdateBody,
  isValidToken,
  isValidLoginData,
  upload,
} = require('../middlewares');

router.post('/register', isValidUserBody, register);

router.post('/login', isValidLoginData, login);

router.patch('/update', isValidToken, isValidUserUpdateBody, updateUser);

router.post('/logout', isValidToken, logout);

router.post('/avatars', isValidToken, upload.single('avatar'), updateAvatar);

module.exports = router;
