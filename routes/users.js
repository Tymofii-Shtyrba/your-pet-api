const router = require('express').Router();

const { register } = require('../controllers');
const { isValidUserBody } = require('../middlewares');

router.post('/register', isValidUserBody, register);

module.exports = router;
