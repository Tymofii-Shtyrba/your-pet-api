const router = require("express").Router();

const { register, login, logout } = require("../controllers");
const {
  isValidUserBody,
  isValidLoginData,
  authenticate,
} = require("../middlewares");

router.post("/register", isValidUserBody, register);

router.post("/login", isValidLoginData, login);

router.post("/logout", authenticate, logout);

module.exports = router;
