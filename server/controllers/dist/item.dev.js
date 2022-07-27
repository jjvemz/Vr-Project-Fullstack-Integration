"use strict";

var item = require("../models/item");

function addItem(req, res) {
  var body = req.body;
  var post = new Post(body);
  post.save(function (err, itemStored) {
    if (err) {
      res.status(500).send({
        code: 500,
        message: "Error del servidor."
      });

      if (!itemStored) {
        res.status(400).send({
          code: 400,
          message: " No se ha podido crear el item"
        });
      } else {
        res.status(200).send({
          code: 200,
          message: "Post creado correctamente."
        });
      }
    }
  });
}

function getItems(req, res) {
  var _req$query = req.query,
      _req$query$page = _req$query.page,
      page = _req$query$page === void 0 ? 1 : _req$query$page,
      _req$query$limit = _req$query.limit,
      limit = _req$query$limit === void 0 ? 10 : _req$query$limit;
  var options = {
    page: page,
    limit: parseInt(limit),
    sort: {
      date: "desc"
    }
  };
  Post.paginate({}, options, function (err, postsStored) {
    if (err) {
      res.status(500).send({
        code: 500,
        message: "Error del servidor."
      });
    } else {
      if (!postsStored) {
        res.status(404).send({
          code: 404,
          message: "No se ha encontrado ningun post."
        });
      } else {
        res.status(200).send({
          code: 200,
          posts: postsStored
        });
      }
    }
  });
}

function updateItem(req, res) {
  var itemData = req.body;
  var id = req.params.id;
  item.findByIdAndUpdate(id, itemData, function (err, itemUpdate) {
    if (err) {
      res.status(500).send({
        code: 500,
        message: "Error del servidor."
      });
    } else {
      if (!itemUpdate) {
        res.status(404).send({
          code: 404,
          message: "Nonse ha encontrado un dato con este id."
        });
      } else {
        res.status(200).send({
          code: 200,
          message: "Post actualizado correctamente"
        });
      }
    }
  });
}

function deleteItem(req, res) {
  var id = req.params.id;
  item.findByIdAndRemove(id, function (err, postDeleted) {
    if (err) {
      res.status(500).send({
        code: 500,
        message: "Error del servidor."
      });
    } else {
      if (!itemDeleted) {
        res.status(404).send({
          code: 404,
          message: "Item no encontrado."
        });
      } else {
        res.status(200).send({
          code: 200,
          message: "El item ha sido eliminado correctamente"
        });
      }
    }
  });
}

function getItem(req, res) {
  var url = req.params.url;
  item.findOne({
    url: url
  }, function (err, itemStored) {
    if (err) {
      res.status(500).send({
        code: 500,
        message: "Error del servidor."
      });
    } else {
      if (!itemStored) {
        res.status(404).send({
          code: 404,
          message: "No se ha encontrado ningun item."
        });
      } else {
        res.status(200).send({
          code: 200,
          item: itemStored
        });
      }
    }
  });
}

module.exports = {
  getItems: getItems,
  updateItem: updateItem,
  addItem: addItem,
  deleteItem: deleteItem,
  getItem: getItem
};