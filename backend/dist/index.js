"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = 4000;
app.get('/', function (_, response) {
    response.send('Hello from Bears 12 🐻');
});
app.listen(PORT, function () { return console.log("server running on port ".concat(PORT)); });
