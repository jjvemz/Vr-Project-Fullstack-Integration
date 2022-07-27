"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var AdminSchema = Schema({
  name: String,
  lastname: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  active: Boolean,
  isAdmin: String
});
module.exports = mongoose.model("Admin", AdminSchema);