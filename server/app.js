const express = require("express");
const bodyParser= require("body-parser");

const app = express();
const {API_VERSION} = require('./config');

//Load Routing
const adminRoutes = require("./routers/admin")
const authRoutes = require("./routers/auth")
const itemRoutes = require("./routers/item");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configure Header HTTP
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


//Router Basic
app.use(`/api/${API_VERSION}`, adminRoutes);
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, itemRoutes)

module.exports= app;