const express = require("express");
const router = express.Router();
const members = require("./api/members.js");
const admins = require("./api/admins.js");
const males = require("./api/males.js");
const females = require("./api/females.js");

router.get("/", (req, res) => {
  res.json(members);
});
router.get("/admins", (req, res) => {
  res.json(admins);
});
router.get("/males", (req, res) => {
  res.json(males);
});
router.get("/females", (req, res) => {
  res.json(females);
});

module.exports = router;
