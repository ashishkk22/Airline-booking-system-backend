const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");

const setupAndStartSever = async () => {
  //create the express server
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
};
setupAndStartSever();
