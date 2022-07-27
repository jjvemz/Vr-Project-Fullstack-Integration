const express=require("express");
const AdminController = require("../controllers/admin");

const api=express.Router();

api.post("/sign-up",AdminController.signUp);
api.post("/sign-in",AdminController.signIn)

api.get("/users", AdminController.getAdmins);
api.get("/users-active", AdminController.getAdminActive);

module.exports=api;