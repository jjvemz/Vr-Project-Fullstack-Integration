"use strict";

var jwt = require("jwt-simple");

var moment = require("moment");

var SECRET_KEY = "QeThWmZq4t7w!z%C*F-JaNdRfUjXn2r5+MbPeShVmYq3t6w9z$C&F)J@NcRfTjWnD(G+KbPdSgVkYp3s6v9y$B&E)H@McQfT!A%D*G-KaPdRgUkXp2s5v8y/B?E(H+Mbt7w!z%C*F-JaNcRfUjXn2r5u8x/A?D(GYq3t6w9z$C&F)J@NcQfTjWnZr4u7x!A%gVkYp3s6v9y$B&E)H@McQeThWmZq4t7wNdRgUkXp2s5v8y/B?E(H+MbQeShVmYq3-J@NcRfUjXn2r5u8x/A?D(G+KbPdSgVkC&F)J@McQfTjWnZr4u7x!A%D*G-KaPdR";

exports.createAccesToken = function (admin) {
  var payload = {
    id: admin._id,
    name: admin.name,
    lastname: admin.lastname,
    email: admin.email,
    isAdmin: admin.isAdmin,
    createToken: moment().unix,
    exp: moment().add(3, "hours").unix()
  };
  return jwt.encode(payload, SECRET_KEY);
};

exports.createRefreshToken = function (admin) {
  var payload = {
    id: admin._id,
    exp: moment().add(30, "days").unix()
  };
  return jwt.encode(payload, SECRET_KEY);
};

exports.decodeToken = function (token) {
  return jwt.decode(token, SECRET_KEY, true);
};