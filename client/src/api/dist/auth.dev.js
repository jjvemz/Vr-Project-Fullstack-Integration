"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccessTokenApi = getAccessTokenApi;
exports.getRefreshTokenApi = getRefreshTokenApi;
exports.refreshAccessTokenApi = refreshAccessTokenApi;
exports.logout = logout;

var _config = require("./config");

var _constants = require("../utils/constants");

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getAccessTokenApi() {
  var accessToken = localStorage.getItem(_constants.ACCESS_TOKEN);

  if (!accessToken || accessToken === "null") {
    return null;
  }

  return willExpireToken(accessToken) ? null : accessToken;
}

function getRefreshTokenApi() {
  var refreshToken = localStorage.getItem(_constants.REFRESH_TOKEN);

  if (!refreshToken || refreshToken === "null") {
    return null;
  }

  return willExpireToken(refreshToken) ? null : refreshToken;
}

function refreshAccessTokenApi(refreshToken) {
  var url = "".concat(_config.BASE_PATH, "/refresh-access-token");
  var bodyObj = {
    refreshToken: refreshToken
  };
  var params = {
    method: "POST",
    body: JSON.stringify(bodyObj),
    headers: {
      "Content-Type": "application/json"
    }
  };
  fetch(url, params).then(function (response) {
    if (response.status !== 200) {
      return null;
    }

    return response.json();
  }).then(function (result) {
    if (!result) {
      logout();
    } else {
      var accessToken = result.accessToken,
          _refreshToken = result.refreshToken;
      localStorage.setItem(_constants.ACCESS_TOKEN, accessToken);
      localStorage.setItem(_constants.REFRESH_TOKEN, _refreshToken);
    }
  });
}

function logout() {
  localStorage.removeItem(_constants.ACCESS_TOKEN);
  localStorage.removeItem(_constants.REFRESH_TOKEN);
}

function willExpireToken(token) {
  var seconds = 60;
  var metaToken = (0, _jwtDecode["default"])(token);
  var exp = metaToken.exp;
  var now = (Date.now() + seconds) / 1000;
  return now > exp;
}