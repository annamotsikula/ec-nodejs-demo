const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("./user.service");
const { UnauthorizedException, NotFoundException } = require("../helpers");

const login = async (payload) => {
  const user = await UserService.findByEmail(payload.email);

  if (!user) throw new NotFoundException("NOT_FOUND");

  const match = await bcrypt.compare(payload.password, user.password);

  if (!match) throw new UnauthorizedException("INCORRECT_EMAIL_PASSWORD");

  const jwtToken = jwt.sign(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: `${process.env.JWT_VALIDITY_HOURS}h`,
    }
  );
  return jwtToken;
};
const register = async (payload) => {
  return;
};
module.exports = {
  login,
  register
};
