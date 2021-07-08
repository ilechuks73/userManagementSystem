const mongoose = require("mongoose");

const activity_schema = new mongoose.Schema({
  name: { type: String },
  severity: { type: Number },
  profile_id: { type: String },
  duration: { type: Number },
});

const Activity = mongoose.model("activity", activity_schema);

module.exports = Activity;
