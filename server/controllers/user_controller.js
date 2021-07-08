const bcrypt = require("bcrypt");
const user_model = require("../models/user_model");
const pool = require("../helpers/mariadb_connection");

exports.get_all_users = async (req, res) => {
 if (req.role === "admin") {
  const users = await user_model.find({});
  res.send(users);
 } else {
  res.status(401).send("no permission to access this article");
 }
};

exports.get_user = async (req, res) => {
 try {
   if (req.role === "user") {
  const user = await user_model.findOne({ _id: req.id });
  res.json(user);
 } else {
  throw "no permission to access this article"
 }
 } catch (err) {
   res.status(200).json(err)
 }
 
};

exports.add_user = async (req, res) => {
 try {
  //  CHECK IF EMAIL EXISTS
  const email_exist = await user_model.findOne({ email: req.body.email });
  if (email_exist) {
   throw "email already exists";
  }

  //  CHECK IF USERNAME IS TAKEN
  const username_taken = await user_model.findOne({
   username: req.body.username,
  });
  if (username_taken) {
   throw "username is taken";
  }
  //ENCRYPT PASSWORD
  const salt = await bcrypt.genSalt(3);
  const hashed_password = await bcrypt.hash(req.body.password, salt);

  // ADD NEW USER
  const new_user = await new user_model({
   ...req.body,
   password: hashed_password,
  }).save();
  res.status(201).json({ user: new_user });
 } catch (err) {
  console.log(err);
 }
};

exports.delete_user = async (req, res) => {
 try {
  const user = await user_model.findById(req.params.ID);
  if (user === null) {
   res.status(400).json({ msg: "user does not exist" });
   return false;
  }
  const deleted_user = await user_model.deleteOne({ email: user.email });
  if (deleted_user) {
   res.status(200).json({ msg: `user ${req.params.ID} deleted` });
   return false;
  }
 } catch (err) {
  res.status(400).json({ msg: err });
 }
};
