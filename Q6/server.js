const express = require("express");
const app = express();
const pages = require("./routes/pages");
const port = 5000;

app.use("/pages", pages);

app.get("*", (req, res) => {
  res.status(400).send("400 Not Found, or bad request");
});

app.listen(port);
