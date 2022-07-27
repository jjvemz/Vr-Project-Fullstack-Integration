"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInApi = signInApi;
exports.getUsersApi = getUsersApi;
exports.getUsersActiveApi = getUsersActiveApi;

var _config = require("./config");

function signInApi(data) {
  var url = "".concat(_config.BASE_PATH, "/").concat(_config.APIVERSION, "/sign-in");
  var params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(url, params).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    console.log(err);
  });
}

function getUsersApi(token) {
  var url = "".concat(_config.BASE_PATH, "/").concat(_config.APIVERSION, "/admin");
  var params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };
  return fetch(url, params).then(function (response) {
    return response.json();
  }).then(function (result) {
    return result;
  })["catch"](function (err) {
    return err.message;
  });
}

function getUsersActiveApi(token, status) {
  var url = "".concat(_config.BASE_PATH, "/").concat(_config.APIVERSION, "/admin-active?active=").concat(status);
  var params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };
  return fetch(url, params).then(function (response) {
    return response.json();
  }).then(function (result) {
    return result;
  })["catch"](function (err) {
    return err.message;
  });
}