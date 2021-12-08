const express = require("express");
const router = express.Router();
const path = require("path");
//The fs.promises API provides an alternative
//set of asynchronous file system methods
// that return Promise objects rather than using callbacks
const fsPromises = require("fs").promises;
// making a local DB by react syntax
const usersDB = {
  users: require("../model/users.json"),
  setUser: function (data) {
    this.users = data;
  },
};

// render page by ejs
router.get("/", (req, res) => {
  res.render("register.ejs");
});

// make new user as the user fill the input
router.post("/", async (req, res) => {
  try {
    const newUser = {
      id: Date.now().toString(),
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    //set the user json file to the prev and add new user
    usersDB.setUser([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "../model/users.json"),
      JSON.stringify(usersDB.users)
    );
    console.log(usersDB.users);
    // if register was successfull go to login page
    res.redirect("/login");
  } catch (e) {
    // if any error happens reload the page
    console.log(e);
    res.redirect("/register");
  }
});

module.exports = router;
