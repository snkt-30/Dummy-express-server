const express = require("express");

/**
 *          const  PORT = require("./config/dotenv");
 *
 * this will give us a object like this
 * PORT:{
 * PORT:3000
 * }
 *
 *
 * const  {PORT} = require("./config/dotenv");
 *
 * this will give us direct value PORT = 3000 we can directly use
 *
 */
const { PORT } = require("./config/dotenv");
const bodyParser = require("body-parser");
const Routes = require("./Routes/index");

async function setupAndStartServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at Port number ${PORT}`);
    app.use('/api', Routes);
  });
}

setupAndStartServer();
