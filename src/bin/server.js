require('dotenv').config();
require('../db/connection');
const express = require("express");
const routes = require("../routing");
const PORT = 5001;
const app = express();

app.use(express.json());
app.use(`/api`, routes).use((req, res) => {
  res.sendStatus(404);
  res.json("Not Found");
});

app.listen(PORT, () => {
  console.log("Server is listening on port: ", PORT);
});