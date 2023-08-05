const UserService = require("../services/user.service");
const AuthService = require("../services/auth.service");
const { safeController } = require('../helpers')
const login = safeController(async (req, res) => {
    const result = await AuthService.login(req.body)
    return res.json(result);
});
const register = safeController(async (req, res) => {
    const payload = req.body;
    await UserService.createUser(payload);
    return res.json({ message: "USER_CREATED" });
});
module.exports = {
  register,
  login,
};
