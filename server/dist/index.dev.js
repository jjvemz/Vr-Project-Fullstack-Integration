"use strict";

var mongoose = require("mongoose");

var app = require("./app");

var PORT_SERVER = process.env.PORT || 3977;
var portDb = 27017;

var _require = require("./config"),
    API_VERSION = _require.API_VERSION,
    IP_SERVER = _require.IP_SERVER,
    PORT_DB = _require.PORT_DB; //mongoose.set("useFindAndModify", false);


mongoose.connect("mongodb://".concat(IP_SERVER, ":").concat(PORT_DB, "/aframeproject"), {
  useNewUrlParser: true
}, function (err, res) {
  try {
    console.log("Conexi\xF3n exitosa en el puerto: ".concat(portDb));
    app.listen(portDb, function () {
      console.log('#######################');
      console.log('######### API REST#####');
      console.log('#######################');
      console.log("http://".concat(IP_SERVER, ":").concat(PORT_SERVER, "/api/").concat(API_VERSION));
    });
  } catch (err) {
    throw err;
  }
});