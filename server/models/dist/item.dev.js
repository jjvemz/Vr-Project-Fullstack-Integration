"use strict";

var mongoose = require("mongoose");

var mongoosePaginate = require('mongoose-paginate-v2');

var Schema = mongoose.Schema;
var ItemSchema = Schema({
  id: {
    type: mongoose.Types.ObjectId
  },
  name: String,
  author: String,
  description: String,
  image: {
    type: String,
    unique: true
  },
  date: Date
});
module.exports = mongoose.model("item", ItemSchema);