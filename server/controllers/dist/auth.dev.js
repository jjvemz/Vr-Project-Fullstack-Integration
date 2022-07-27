"use strict";

var jwt = require("../services/jwt");

var moment = require("moment");

var User = require("../models/item");

function willExpireToken(token) {
  var _jwt$decodedToken = jwt.decodedToken(token),
      exp = _jwt$decodedToken.exp;

  var currentDate = moment().unix();

  if (currentDate > exp) {
    return true;
  }

  return false;
}

function refreshAccessToken(req, res) {
  var refreshToken = req.body.refreshToken;
  var isTokenExpired = willExpireToken(refreshToken);

  if (isTokenExpired) {
    res.status(404).send({
      message: "El refreshToken ha expirado"
    });
  } else {
    var _jwt$decodedToken2 = jwt.decodedToken(refreshToken),
        id = _jwt$decodedToken2.id;

    User.findOne({
      _id: id
    }, function (err, userStored) {
      if (err) {
        res.status(500).send({
          message: "Error del servidor."
        });
      } else {
        if (!userStored) {
          res.status(404).send({
            message: "Usuario no encontrado."
          });
        } else {
          res.status(200).send({
            accessToken: jwt.createAccessToken(userStored),
            refreshToken: refreshToken
          });
        }
      }
    });
  }
}

module.exports = {
  refreshAccessToken: refreshAccessToken
};