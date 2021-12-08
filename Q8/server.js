const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const port = 5000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/rules", (req, res) => {
  res.render("rules.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.get("/products/:id", (req, res) => {
  if (Number(req.params.id) <= 6) {
    res.render(`products/product.ejs`, { number: req.params.id });
  } else {
    res.render("notfound.ejs");
  }
});
app.get("*", (req, res) => {
  res.render("notfound.ejs");
});

app.listen(port);
