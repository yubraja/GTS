const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  role:{
    type:String,
    required:true
  },
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  longitude:{
    type:Number,
    required:true
  },
  latitude:{
    type:Number,
    required:true
  },
  number:{
    type:Number,
    required:true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

const user = mongoose.model('user', userSchema);

module.exports = user;
