const router = require("express").Router();
const AuthController = require('../controller/auth.controller');
const validators = require('../validators/auth.validator')

router.post("/login",validators.loginValidator, AuthController.login)
router.post("/register", validators.signUpValidator, AuthController.register)

module.exports = router;
