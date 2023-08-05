const jwt = require("jsonwebtoken");
const { UnauthorizedException } = require('../helpers');


const authMiddleWear = (req, _, next) => {
  try {
    if (req.headers.hasOwnProperty("authorization")) {
      const token = req?.headers?.authorization.split(" ")[1];
      jwt.verify(token, process.env.JWT_ACCESS_KEY);
      return next();
    } else {
      throw new Error();
    }
  } catch (error) {
    return next(new UnauthorizedException('SIGN_IN_REQUIRED'))
  }
};
module.exports = authMiddleWear;
