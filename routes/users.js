const router = require("express").Router();

const { register, login, logout } = require("../controllers");
const {
  isValidUserBody,
  isValidToken,
  isValidLoginData,
} = require("../middlewares");

router.post("/register", isValidUserBody, register);

router.post("/login", isValidLoginData, login);

router.post("/logout", isValidToken, logout);

module.exports = router;
