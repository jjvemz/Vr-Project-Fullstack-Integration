const express = require("express");
const ItemController = require("../controllers/item");

const api = express.Router();

api.post("/add-item",  ItemController.addItem);
api.get("/get-items", ItemController.getItems);
api.put("/update-item/:id",  ItemController.updateItem);
api.delete("/delete-item/:id",  ItemController.deleteItem);
api.get("/get-item/:url", ItemController.getItem);

module.exports = api;