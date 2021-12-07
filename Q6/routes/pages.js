const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => res.send("Welcome to my page"));

router.get("/:index", (req, res) => {
  res.sendFile(path.join(__dirname, `../views/${req.params.index}.html`));
});

module.exports = router;
