const UserService = require("../services/user.service");
const AuthService = require("../services/auth.service");
const { safeController } = require("../helpers");

const register = safeController(async (req, res) => {
  const payload = req.body;
  await UserService.createUser(payload);

  return res.json({ message: "CREATED" });
});

const login = safeController(async (req, res) => {
  const payload = req.body;
  const token = await AuthService.login(payload);

  return res.json({ token });
});

module.exports = {
  register,
  login,
};
