/// <reference path="./typings/node/node.d.ts" />
"use strict";
var express = require("express");
var bodyparser = require("body-parser");
var connection_1 = require("./database/connection");
var user_1 = require("./database/schema/user");
connection_1.connectionToDb();
/*var firebase = require("firebase");
firebase.initializeApp({
  serviceAccount: "MyCustomers-37bb97570891.json",
  databaseURL: "https://project-4674450910656093602.firebaseio.com"
});*/
var admin_1 = require("./routes/admin");
var general_1 = require("./routes/general");
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('mycustomer/www/'));
app.use('/admin', admin_1.admin);
app.use('/general', general_1.general);
app.post('/authentication', function (req, res) {
    var object = { Email: req.body.Email, Password: req.body.Password };
    var token = { token: req.body.token };
    user_1.FindOneAndUpdateData(object, token).then(function (result) {
        res.send(result);
    }, function (result) {
        console.log(result);
        res.send(result);
    });
});
app.use('/', function (req, res, next) {
    next();
});
app.use('/', function (err, req, res, next) {
    res.send({ status: false });
    next();
});
app.set("port", (process.env.PORT || 3000));
app.listen(app.get("port"), function () {
    console.log('running server on 3000');
});
