/// <reference path="../../typings/node/node.d.ts" />
"use strict";
var mongoose = require("mongoose");
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var q = require("q");
var Schema = mongoose.Schema;
/*interface IUserSchema extends mongoose.Document {
    OwnerName: String,
    createdBy: String,
    createdOn: { type: Date },
    CompanyName: String,
    Mobile: String,
    LandLine: String,
    SenderId: String,
    photo: String
}*/
//create Schema
exports.UserSchema = new mongoose.Schema({
    OwnerName: String,
    createdBy: String,
    CompanyName: String,
    Mobile: String,
    Email: String,
    Password: String,
    LandLine: String,
    SenderId: String,
    photo: String,
    isAdmin: Boolean,
    uid: String,
    OwnerId: { type: Schema.Types.ObjectId, ref: 'User' },
    createdOn: { type: Date, "default": Date.now },
    customers: [{ type: Schema.ObjectId, ref: 'Customer' }],
    branches: [{ type: Schema.ObjectId, ref: 'Branch' }],
    _creator: { type: Schema.Types.ObjectId, ref: 'User' },
    Users: [{ type: Schema.ObjectId, ref: 'User' }],
    token: String
});
exports.UserSchema.plugin(deepPopulate, {
    populate: {
        'Users': {
            select: 'token -_id'
        }
    }
});
//compile Schema
exports.UserModel = mongoose.model("User", exports.UserSchema);
exports.FindToken = function (data) {
    //console.log(data);
    var deferred = q.defer();
    exports.UserModel
        .findById(data)
        .deepPopulate('Users')
        .exec(function (err, posts) {
        if (!err) {
            deferred.resolve(posts);
        }
        else {
            deferred.reject(err);
        }
    });
    return deferred.promise;
};
//function saving object 
function SaveUserObject(UserObj) {
    var deferred = q.defer();
    var User = new exports.UserModel(UserObj);
    User.save(function (err, success) {
        if (success) {
            updateUser(success);
            deferred.resolve({ status: true, success: success });
        }
        else {
            console.log(err);
            deferred.reject({ status: false, success: err });
        }
    });
    return deferred.promise;
}
exports.SaveUserObject = SaveUserObject;
function updateUser(data) {
    exports.UserModel.findByIdAndUpdate(data.OwnerId, { $push: { Users: { _id: data._id } } }, { upsert: true }, function (err, model) {
        if (!err) {
            console.log(model);
        }
        else {
            console.log(err);
        }
    });
}
//function finding Data by User Name 
function FindUserData(UserObject) {
    var deferred = q.defer();
    exports.UserModel.find(UserObject, function (err, res) {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    });
    return deferred.promise;
}
exports.FindUserData = FindUserData;
function FindOneUserData(condition, fields) {
    var deferred = q.defer();
    exports.UserModel.find(condition, fields, function (err, res) {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    });
    return deferred.promise;
}
exports.FindOneUserData = FindOneUserData;
function FindOneData(condition) {
    var deferred = q.defer();
    exports.UserModel.findOne(condition, function (err, res) {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject(err);
        }
    });
    return deferred.promise;
}
exports.FindOneData = FindOneData;
function FindOneAndUpdateData(query, condition) {
    var deferred = q.defer();
    console.log(query, condition);
    exports.UserModel.findOneAndUpdate(query, condition, { "new": true }, function (err, res) {
        if (res) {
            deferred.resolve({ status: true, success: res });
        }
        else {
            deferred.reject({ status: false, success: err });
        }
    });
    return deferred.promise;
}
exports.FindOneAndUpdateData = FindOneAndUpdateData;
