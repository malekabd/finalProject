const { Router } = require("express");
const router = Router();

router.get("/2", (req, res) => {
  res.json({ users: ["userOne222", "userTwo", "userThree", "userFour"] });
});
module.exports = router;
