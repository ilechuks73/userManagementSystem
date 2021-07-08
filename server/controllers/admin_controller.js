const bcrypt = require("bcrypt");
const admin_model = require("../models/admin_model");

exports.get_all_admins = async (req, res) => {
  console.log('requested')
 if (req.role === "admin") {
  const admins = await admin_model.find();
  res.status(200).json(admins);
 } else {
  res.status(401).send("no permission to access this article");
 }
};

exports.get_admin = async (req, res) => {
 try {
  if (req.role === "admin") {
   const admin = await admin_model.findOne({ _id: req.id });
   response.status(200).json(admin);
  } else {
   throw "you are not allowed to request this resource";
  }
 } catch (err) {
  res.status(400).json(err);
 }
};

exports.add_admin = async () => {
 try {
  if (req.role === "admin") {
   //  CHECK IF EMAIL EXISTS
   const email_exist = await admin_model.findOne({ email: req.body.email });
   if (email_exist) {
    throw "this email already exists";
   }

   //  CHECK IF USERNAME IS TAKEN
   const username_taken = await admin_model.findOne({
    username: req.body.username,
   });
   if (username_taken) {
    throw "this username is taken";
   }

   //ENCRYPT PASSWORD
   const salt = await bcrypt.genSalt(3);
   const hashed_password = await bcrypt.hash(req.body.password, salt);

   //ADD NEW ADMIN
   const new_admin = await new admin_model({
    ...req.body,
    password: hashed_password,
   }).save();
   res.send(new_admin);
  } else {
   throw "you are not allowed to request this resource";
  }
 } catch (err) {
  res.status(400).json(err);
 }
};

exports.delete_admin = async () => {
 try {
  if (req.role === "admin") {
   const admin = await admin_model.findById(req.params.ID);
   if (admin === null) {
    throw "user does not exist";
   }
   const deleted_admin = await admin_model.deleteOne({ email: admin.email });
   res.status(200).json({ msg: `user ${req.params.ID} deleted` });
  } else {
    throw "you are not allowed to request this resource"
  }
 } catch (err) {
  res.status(400).json(err);
 }
};
