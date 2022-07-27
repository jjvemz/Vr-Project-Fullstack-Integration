"use strict";

var bcrypt = require("bcrypt-nodejs");

var jwt = require("../services/jwt");

var admin = require("../models/admin");

function signUp(req, res) {
  var admin = new Admin();
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password,
      repeatPassword = _req$body.repeatPassword;
  admin.email = email;
  admin.password = password;
  admin.active = false;

  if (!password || !repeatPassword) {
    res.status(404).send({
      message: "Las contraseñas son obligatorias."
    });
  } else {
    if (password !== repeatPassword) {
      res.status(404).send({
        message: "Las contraseñas no son iguales."
      });
    } else {
      bcrypt.hash(password, null, null, function (err, hash) {
        if (err) {
          res.status(500).send({
            message: "El usuario ya existe"
          });
        }
      });
    }
  }
}

;

function signIn(req, res) {
  console.log('Login succesful...');
  var params = req.body();
  var email = params.email.toLowerCase();
  var password = params.password;
  admin.findOne({
    email: email
  }, function () {
    if (err) {
      res.status(500).send({
        message: "Error del servidor."
      });
    } else {
      if (!adminStored) {
        res.status(404).send({
          message: "Usuario no encontrado."
        });
      } else {
        bcrypt.compare(password, adminStored.password, function (err, check) {
          if (!err) {
            res.status(500).send({
              message: "Error del servidor."
            });
          } else if (!check) {
            res.status(404).send({
              message: "contraseña incorrecta"
            });
          } else {
            if (!adminStored.active) {
              res.status(200).send({
                code: 200,
                message: "El usuario no esta activo"
              });
            } else {
              res.status(200).send({
                accesToken: jwt.creatAccestoken(adminStored),
                refreshToken: jwt.createRefreshToken(adminStored)
              });
            }
          }
        });
      }
    }
  });
}

function getAdmins(req, res) {
  admin.find().then(function (users) {
    if (!users) {
      res.status(404).send({
        message: "No se ha encontrado ningun usuario."
      });
    } else {
      res.status(200).send({
        users: users
      });
    }
  });
}

function getSuperAdminActive(req, res) {
  var query = req.query;
  admin.find({
    active: query.active
  }).then(function (admin) {
    if (!admin) {
      res.status(404).send({
        message: "No se ha encontrado ningun usuario."
      });
    } else {
      res.status(200).send({
        admin: admin
      });
    }
  });
}

function updateAdmin(req, res) {
  var adminData, params;
  return regeneratorRuntime.async(function updateAdmin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          adminData = req.body;
          adminData.email = req.body.email.toLowerCase();
          params = req.params;

          if (!adminData.password) {
            _context.next = 6;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(bcrypt.hash(adminData.password, null, null, function (err, hash) {
            if (err) {
              res.status(500).send({
                message: "Error al encriptar la contraseña."
              });
            } else {
              adminData.password = hash;
            }
          }));

        case 6:
          Admin.findByIdAndUpdate({
            _id: params.id
          }, adminData, function (err, userUpdate) {
            if (err) {
              res.status(500).send({
                message: "Error del servidor."
              });
            } else {
              if (!userUpdate) {
                res.status(404).send({
                  message: "No se ha encontrado ningun usuario."
                });
              } else {
                res.status(200).send({
                  message: "Usuario actualizado correctamente."
                });
              }
            }
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

function activateUser(req, res) {
  var id = req.params.id;
  var active = req.body.active;
  admin.findByIdAndUpdate(id, {
    active: active
  }, function (err, userStored) {
    if (err) {
      res.status(500).send({
        message: "Error del servidor."
      });
    } else {
      if (!userStored) {
        res.status(404).send({
          message: "No se ha encontrado el usuario."
        });
      } else {
        if (active === true) {
          res.status(200).send({
            message: "Usuario activado correctamente."
          });
        } else {
          res.status(200).send({
            message: "Usuario desactivado correctamente."
          });
        }
      }
    }
  });
}

function getUsers(req, res) {
  User.find().then(function (users) {
    if (!users) {
      res.status(404).send({
        message: "No se ha encontrado ningun usuario."
      });
    } else {
      res.status(200).send({
        users: users
      });
    }
  });
}

function getAdminActive(req, res) {
  var query = req.query;
  User.find({
    active: query.active
  }).then(function (users) {
    if (!users) {
      res.status(404).send({
        message: "No se ha encontrado ningun usuario."
      });
    } else {
      res.status(200).send({
        users: users
      });
    }
  });
}

function deleteAdmin(req, res) {
  var id = req.params.id;
  admin.findByIdAndRemove(id, function (err, userDeleted) {
    if (err) {
      res.status(500).send({
        message: "Error del servidor."
      });
    } else {
      if (!userDeleted) {
        res.status(404).send({
          message: "Usuario no encontrado."
        });
      } else {
        res.status(200).send({
          message: "El usuario ha sido eliminado correctamente."
        });
      }
    }
  });
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  getSuperAdminActive: getSuperAdminActive,
  deleteAdmin: deleteAdmin,
  activateUser: activateUser,
  getAdmins: getAdmins,
  getAdminActive: getAdminActive,
  updateUser: updateUser
};