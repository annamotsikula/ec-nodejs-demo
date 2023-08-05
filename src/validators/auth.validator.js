const Joi = require("joi");
const joiValidator = require("./joi.validator");

const signUpValidator = async (req, res, next) => {
  const regex = new RegExp("^[a-zA-Z0-9]{8,30}$");

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(regex).required(),
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    balance: Joi.number().min(0),
    isAdmin: Joi.boolean()
  });

  return joiValidator({ schema, objectToValidate: req.body, next });
};

const loginValidator = async (req, res, next) => {
  const regex = new RegExp("^[a-zA-Z0-9]{8,30}$");
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(regex).required(),
  });

  return joiValidator({ schema, objectToValidate: req.body, next });
};

module.exports = { signUpValidator, loginValidator };
