const UserService = require("./user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UnauthorizedException, NotFoundException, addHours } = require('../helpers');


const login = async (payload) => {
  const user = await UserService.findByEmail(payload.email);
  if (!user) throw new NotFoundException("NOT_FOUND");
  const valid = await bcrypt.compare(payload.password, user.password);
  if (!valid) throw new UnauthorizedException("CREDENTIALS_NOT_MATCHED");
  const expirationDate = process.env.JWT_VALID_DAY * 24 + process.env.JWT_VALID_HRS
  const token = jwt.sign(
    {
      userId: user.id,
    },
    process.env.JWT_ACCESS_KEY,
    {
      expiresIn: `${
        expirationDate
      }h`,
    }
  );
  return { token: token, expireDate : new Date().addHours(expirationDate)}
};
const register = async (payload) => {
  return;
};
module.exports = {
  login,
  register,
};
