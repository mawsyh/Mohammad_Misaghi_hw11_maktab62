const express = require("express");
const router = express.Router();
//body parser with npm install body-parser
const bodyParser = require("body-parser");
// for application/json parser
const jsonParser = bodyParser.json();
// for application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const users = require("../../public/users");

router.get("/", (req, res) => {
  res.send("user Home Page");
});
router.post("/getUser", jsonParser, (req, res) => {
  const foundBoolean = users.some(
    (user) => user.username === req.body.username
  );
  if (foundBoolean) {
    res.json(users.filter((user) => user.username === req.body.username));
  } else {
    res
      .status(400)
      .json({
        msg: `No user with the username of ${req.body.username} found.`,
      });
  }
});

module.exports = router;
