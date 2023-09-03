const router = require('express').Router();

const {
  register,
  login,
  updateUser,
  logout,
  updateAvatar,
  currentUser,
} = require('../controllers/users');

const {
  isValidUserBody,
  isValidUserUpdateBody,
  isValidToken,
  isValidLoginData,
  upload,
  isValidToken2,
} = require('../middlewares');

router.post('/register', isValidUserBody, register);

router.post('/login', isValidLoginData, login);

router.patch('/update', isValidToken2, isValidUserUpdateBody, updateUser);

router.post('/logout', isValidToken, logout);

router.post('/avatars', isValidToken, upload.single('avatarURL'), updateAvatar);

router.get('/current', isValidToken, currentUser);

module.exports = router;
