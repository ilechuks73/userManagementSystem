const express = require("express");
const bcrypt = require("bcrypt");
const verify = require("../custom_middleware/jwt_verify");

const router = express.Router();
const Admin = require("../models/admin_model.js");

router.get("/", verify, async (req, res) => {
  if (req.role === "admin") {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } else {
    res.status(401).send("no permission to access this article");
  }
});

router.get("/info", verify, async (req, res) => {
  if (req.role === "admin") {
    const admin = await Admin.findOne({_id: req.id });
    res.json(admin);
  } else {
    res.status(401).send("no permission to access this article");
  }
});

router.post("/", async (req, res) => {
  //  CHECK IF EMAIL EXISTS
  const email_exist = await Admin.findOne({ email: req.body.email });
  if (email_exist) return res.status(400).json({ msg: "email already exists" });

  //  CHECK IF USERNAME IS TAKEN
  const username_taken = await Admin.findOne({ username: req.body.username });
  if (username_taken)
    return res
      .status(400)
      .json({ msg: `${req.body.username} is already taken` });

  //ENCRYPT PASSWORD
  const salt = await bcrypt.genSalt(3);
  const hashed_password = await bcrypt.hash(req.body.password, salt);

  //ADD NEW ADMIN
  const new_admin = await new Admin({
    ...req.body,
    password: hashed_password,
  }).save();
  res.send(new_admin);
});
  
module.exports = router;
  