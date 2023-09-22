const config = require("./index");
const express = require("./express");

function setExpress(app) {
  app.set("view engine", "jsx");
  app.engine("jsx", require("express-react-views").createEngine());
  //app.use(express.static("public"));
}
module.exports = setExpress;
