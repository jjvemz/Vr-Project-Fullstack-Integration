"use strict";

var express = require("express");

var ItemController = require("../controllers/item");

var api = express.Router();
api.post("/add-item", ItemController.addItem);
api.get("/get-items", ItemController.getItems);
api.put("/update-item/:id", ItemController.updateItem);
api["delete"]("/delete-item/:id", ItemController.deleteItem);
api.get("/get-item/:url", ItemController.getItem);
module.exports = api;