const mongoose = require("mongoose");

const admin_schema = new mongoose.Schema({
 surname: { type: String },
 other_names: { type: String },
 gender: { type: String },
 email: { type: String },
 username: { type: String },
 password: { type: String },
 role: { type: String, default: "admin" },
});

const Admin = mongoose.model("admin", admin_schema);

module.exports = Admin;
