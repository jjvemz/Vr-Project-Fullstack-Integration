"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUpApi = signUpApi;
exports.signInApi = signInApi;
exports.getUsersApi = getUsersApi;
exports.getUsersActiveApi = getUsersActiveApi;
exports.uploadAvatarApi = uploadAvatarApi;
exports.getAvatarApi = getAvatarApi;
exports.updateUserApi = updateUserApi;
exports.activateUserApi = activateUserApi;
exports.deleteUserApi = deleteUserApi;
exports.signUpAdminApi = signUpAdminApi;

var _config = require("./config");

function signUpApi(data) {
  var url = "".concat(_config.BASE_PATH, "/sign-up");
  var params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(url, params).then(function (response) {
    return response.json();
  }).then(function (result) {
    if (result.user) {
      return {
        ok: true,
        message: "Usuario creado correctamente"
      };
    }

    return {
      ok: false,
      message: result.message
    };
  })["catch"](function (err) {
    return {
      ok: false,
      message: err.message
    };
  });
}

function signInApi(data) {
  var url = "".concat(_config.BASE_PATH, "/sign-in");
  var params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(url, params).then(function (response) {
    return response.json();
  }).then(function (result) {
    console.log(result);
    return result;
  })["catch"](function (err) {
    return err.message;
  });
}

function getUsersApi(token) {
  var url = "".concat(_config.BASE_PATH, "/users");
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
  var url = "".concat(_config.BASE_PATH, "/users-active?active=").concat(status);
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

function uploadAvatarApi(token, avatar, userId) {
  var url = "".concat(_config.BASE_PATH, "/upload-avatar/").concat(userId);
  var formData = new FormData();
  formData.append("avatar", avatar, avatar.name);
  var params = {
    method: "PUT",
    body: formData,
    headers: {
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

function getAvatarApi(avatarName) {
  var url = "".concat(_config.BASE_PATH, "/get-avatar/").concat(avatarName);
  return fetch(url).then(function (response) {
    return response.url;
  })["catch"](function (err) {
    return err.message;
  });
}

function updateUserApi(token, user, userId) {
  var url = "".concat(_config.BASE_PATH, "/update-user/").concat(userId);
  var params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(user)
  };
  return fetch(url, params).then(function (response) {
    return response.json();
  }).then(function (result) {
    return result;
  })["catch"](function (err) {
    return err.message;
  });
}

function activateUserApi(token, userId, status) {
  var url = "".concat(_config.BASE_PATH, "/activate-user/").concat(userId);
  var params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify({
      active: status
    })
  };
  return fetch(url, params).then(function (response) {
    return response.json();
  }).then(function (result) {
    return result.message;
  })["catch"](function (err) {
    return err.message;
  });
}

function deleteUserApi(token, userId) {
  var url = "".concat(_config.BASE_PATH, "/delete-user/").concat(userId);
  var params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };
  return fetch(url, params).then(function (response) {
    return response.json();
  }).then(function (result) {
    return result.message;
  })["catch"](function (err) {
    return err.message;
  });
}

function signUpAdminApi(token, data) {
  var url = "".concat(_config.BASE_PATH, "/sign-up-admin");
  var params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
  };
  return fetch(url, params).then(function (response) {
    return response.json();
  }).then(function (result) {
    return result.message;
  })["catch"](function (err) {
    return err.message;
  });
}