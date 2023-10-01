const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  expireIn:Number,
});

const otp = mongoose.model('otp', otpSchema);

module.exports = otp;
