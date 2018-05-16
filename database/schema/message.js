/// <reference path="../../typings/node/node.d.ts" />
"use strict";
var mongoose = require("mongoose");
var q = require("q");
//create Schema
var MessageSchema = new mongoose.Schema({
    MessageName: String,
    createdBy: String,
    MessasgeBody: String,
    createdOn: { type: Date, "default": Date.now },
    userId: String,
    OwnerId: String,
    Status: String
});
//compile Schema
var MessageModel = mongoose.model("Message", MessageSchema);
//function saving object
function SaveMessageObject(UserObj) {
    var deferred = q.defer();
    var Message = new MessageModel(UserObj);
    Message.save(function (err, success) {
        if (!err) {
            deferred.resolve(success);
        }
        else {
            deferred.reject(err);
        }
    });
    return deferred.promise;
}
exports.SaveMessageObject = SaveMessageObject;
//function finding Data by Message Name 
function FindMessageData(UserObject) {
    var deferred = q.defer();
    console.log(UserObject);
    MessageModel.find(UserObject, function (err, res) {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    });
    return deferred.promise;
}
exports.FindMessageData = FindMessageData;
function updateSmsTemplate(data) {
    var deferred = q.defer();
    MessageModel.findByIdAndUpdate(data._id, { Status: data.Status }, { upsert: true }, function (err, model) {
        if (!err) {
            deferred.resolve(model);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    });
    return deferred.promise;
}
exports.updateSmsTemplate = updateSmsTemplate;
