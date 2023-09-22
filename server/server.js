const config = require("./config");
const express = require("express");
const app = express();
const cors =require('cors')
require("./config/express")(app);
const router = require("./routes");
app.use(router);
app.use(cors())
app.listen(config.development.port, () =>
  console.log(`Express is running ${config.development.port}`)
);
