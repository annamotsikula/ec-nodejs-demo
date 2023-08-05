const { ApiError, InternalServerErrorException } = require("../helpers")

const errorConverterMiddleware = (err, req, res, next) => {
  let error = err;
  console.log(err)
  if(!(error instanceof ApiError)){
    error = new InternalServerErrorException('EXCEPTION');
  };  
  next(error);
}

module.exports = { errorConverterMiddleware }