const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const user = require("./routes/api/user");
const admin = require("./routes/api/admin");

//middleware
app.use("/user", user);
app.use("/admin", admin);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "views/notfound.html"));
});

app.listen(port);
