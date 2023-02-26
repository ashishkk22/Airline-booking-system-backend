const express = require("express");
const { PORT } = require("./config/serverConfig");

const setupAndStartSever = async () => {
  //create the express server
  const app = express();

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
  });
};
setupAndStartSever();
