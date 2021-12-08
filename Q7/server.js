const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
// const passport = require("passport");
const register = require("./routes/registerController");
const login = require("./routes/loginController");

// const initializePassport = require("./passport-config");
// initializePassport(
//     passport,
//     (username) => users.find((user) => user.mail === email)
// );

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: false }));
app.use("/register", register);
app.use("/login", login);

app.get("*", (req, res) => {
  res.render("notfound.ejs");
});

app.listen(port, () => console.log("listening on port " + port));
