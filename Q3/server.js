const express = require("express");
const path = require("path");
const user = require("./routes/users");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use("/users", user);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port);
