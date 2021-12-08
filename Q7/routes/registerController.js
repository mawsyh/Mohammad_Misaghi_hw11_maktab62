const express = require("express");
const router = express.Router();
const path = require("path");

//The fs.promises API provides an alternative
//set of asynchronous file system methods
// that return Promise objects rather than using callbacks
const fsPromises = require("fs").promises;
const usersDB = {
  users: require("../model/users.json"),
  setUser: function (data) {
    this.users = data;
  },
};

router.get("/", (req, res) => {
  res.render("register.ejs");
});

router.post("/", async (req, res) => {
  try {
    const newUser = {
      id: Date.now().toString(),
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    usersDB.setUser([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "../model/users.json"),
      JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users);
    await res.redirect("/login");
  } catch (e) {
    console.log(e);
    res.redirect("/register");
  }
});

module.exports = router;
