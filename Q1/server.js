const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("*", (req, res) => {
  res.status(400).send("400 Not Found, or bad request");
});

app.listen(port);
