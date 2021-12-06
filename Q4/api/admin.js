const express = require("express");
const router = express.Router();
const users = require("../public/users");

router.get("/", (req, res) => {
  res.send("admin Home page");
});
router.get("/getAllUsers", (req, res) => {
  res.json(users);
});

module.exports = router;
