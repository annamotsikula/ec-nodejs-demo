const UserService = require("../services/user.service");
const AuthService = require("../services/auth.service");
const { safeController } = require('../helpers')
const login = safeController(async (req, res) => {
    const token = await AuthService.login(req.body)
    return res.json({ token });
});
const register = safeController(async (req, res) => {
    const payload = req.body;
    await UserService.createUser(payload);
    return res.json({ messate: "USER_CREATED" });
});
module.exports = {
  register,
  login,
};
