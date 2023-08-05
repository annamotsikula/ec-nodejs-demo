require('dotenv').config();
require('../db/connection');
const express = require("express");
const routes = require("../routing");
const PORT = 5001;
const app = express();
const { errorConverterMiddleware } = require('../middlewear/error.middlewear');
const { errorHandler } = require('../middlewear/error-handler.middlewear')


app.use(express.json());
app.use(`/api`, routes).use((req, res) => {
  res.statusCode = 404;
  res.json({message: 'NOT_FOUND'});
});
app.use(errorConverterMiddleware);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log("Server is listening on port: ", PORT);
});