const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
  surname : {type: String} ,
  other_names : {type: String},
  gender : {type: String},
  marital_status : {type : String},
  email : {type: String},
  username : {type: String},
  password : {type: String},
  role: {
    type: String,
    default: "user"
  },
  date_joined : {
    type: String,
    required: true,
    default: Date().toString()
  }
  
})

const User = mongoose.model('user', user_schema)

module.exports = User 
