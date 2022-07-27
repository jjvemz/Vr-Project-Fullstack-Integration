"use strict";

var express = require("express");

var AdminController = require("../controllers/admin");

var api = express.Router();
api.post("/sign-up", AdminController.signUp);
api.post("/sign-in", AdminController.signIn);
api.get("/users", AdminController.getAdmins);
api.get("/users-active", AdminController.getAdminActive);
module.exports = api;