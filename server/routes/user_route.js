const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verify = require("../custom_middleware/jwt_verify");

const User = require("../models/user_model");


//GET ALL USERS WITH ADMIN AUTHENTICATION
router.get("/", verify, async (req, res) => {
  if (req.role === "admin") {
    const users = await User.find({});
    res.send(users);
  } else {
    res.status(401).send("no permission to access this article");
  }
});


//GET SINGLE USER DATA FROM DATABASE
router.get("/info", verify, async (req, res) => {
  if (req.role === "user") {
    const user = await User.findOne({ _id: req.id });
    res.json(user);
  } else {
    res.status(401).send("no permission to access this article"); 
  }
});


//ADD A NEW USER TO DATABASE VIA REGISTRATION
router.post("/", async (req, res) => {
  try {
    //  CHECK IF EMAIL EXISTS
    const email_exist = await User.findOne({ email: req.body.email });
    if (email_exist)
      return res.status(400).json({ msg: "email already exists" });

      
      
    //  CHECK IF USERNAME IS TAKEN
    const username_taken = await User.findOne({ username: req.body.username });
    if (username_taken)
      return res
        .status(400)
        .json({ msg: `${req.body.username} is already taken` });

    //ENCRYPT PASSWORD
    const salt = await bcrypt.genSalt(3);
    const hashed_password = await bcrypt.hash(req.body.password, salt);

    // ADD NEW USER
    const new_user = await new User({
      ...req.body,
      password: hashed_password,
    }).save();
    res.status(201).json({ user: new_user });
  } catch (err) {
    console.log(err);
  }
});

//DELETE A SINGLE USER FROM DATABASE VIA ID
router.delete("/:ID", async (req, res) => {
  try {
    const user = await User.findById(req.params.ID);
    if (user === null) {
      res.status(400).json({ msg: "user does not exist" });
      return false;
    }
    const deleted_user = await User.deleteOne({ email: user.email });
    if (deleted_user) {
      res.status(200).json({ msg: `user ${req.params.ID} deleted` });
      return false;
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
