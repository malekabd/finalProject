const { Router } = require("express");
const router = Router();
const cors =require('cors')
const homeController = require("./controller/homeController");
const homeController2 = require("./controller/homeController2");
router.use("/", homeController);
router.use("/p",homeController2);
module.exports = router;
