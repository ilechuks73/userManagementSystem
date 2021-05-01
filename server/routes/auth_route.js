const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user_model");
const Admin = require("../models/admin_model");

//AUTHENTICATE AN EXISTING PROFILE VIA LOGIN
router.post("/login", async (req, res) => {
  try {
    //  CHECK IF EMAIL OR USERNAME MATCHES

    const user = await User.findOne({ email: req.body.id });

    const admin = await Admin.findOne({ email: req.body.id });

    const profile = user || admin;

    if (!user && !admin) {
      throw "invalid email or password";
    }

    //CHECKS IF PASSWORD MATCHES
    const profile_password_validation = await bcrypt.compare(
      req.body.password,
      profile.password
    );
    if (!profile_password_validation) {
      throw "invalid email or password";
    }

    const token = jwt.sign(
      { _id: profile._id, role: profile.role },
      process.env.TOKEN_SECRET
    );
    res.status(200).json({ auth_token: token, role: profile.role });
  } catch (err) {
    res.statusMessage = err
    return res.status(400).end()
  }
});

module.exports = router;
