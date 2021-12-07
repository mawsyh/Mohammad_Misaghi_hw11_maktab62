const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "views/notfound.html"));
});

app.listen(port);
