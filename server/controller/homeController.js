const { Router } = require("express");
const router = Router();
const cors =require('cors')
router.get("/", cors(),(req, res) => {
 
  res.json({ users: ["userOne", "userTwo", "userThree", "userFour"] });
});
module.exports = router;
