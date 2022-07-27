"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var app = express();

var _require = require('./config'),
    API_VERSION = _require.API_VERSION; //Load Routing


var adminRoutes = require("./routers/admin");

var authRoutes = require("./routers/auth");

var itemRoutes = require("./routers/item");

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); // Configure Header HTTP

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
}); //Router Basic

app.use("/api/".concat(API_VERSION), adminRoutes);
app.use("/api/".concat(API_VERSION), authRoutes);
app.use("/api/".concat(API_VERSION), itemRoutes);
module.exports = app;