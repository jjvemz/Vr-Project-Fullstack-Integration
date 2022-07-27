"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var UserOTPVerificationSchema = new Schema({
  userId: String,
  otp: String,
  createdAt: Date,
  expiresAt: Date
});
var UserOTPVerification = mongoose.model("UserOTPVerification", UserOTPVerificationSchema);
module.exports = UserOTPVerification;