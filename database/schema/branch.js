"use strict";
; /// <reference path="../../typings/node/node.d.ts" />
var mongoose = require("mongoose");
var q = require("q");
var Schema = mongoose.Schema;
//create Schema
var companySchema = new mongoose.Schema({
    BranchName: String,
    createdBy: String,
    createdOn: { type: Date },
    MobileNo: String,
    BranchEmail: String,
    BranchOwner: String,
    Address: String,
    Landline: String,
    BusinessType: String,
    SenderID: String,
    UserID: { type: Schema.Types.ObjectId, ref: 'User' },
    _creator: { type: Schema.Types.ObjectId, ref: 'User' },
    status: { type: Boolean, "default": true }
});
//compile Schema
var CompanyModel = mongoose.model("Branch", companySchema);
//function saving object
function SaveBranchObject(UserObj) {
    var deferred = q.defer();
    // UserModel.find({uid : UserObj.uid }, function(err,user){  
    //     console.log(user);              
    //     user[0].branches.push({ branchId :  UserObj.branchId });
    //     user[0].markModified('branches');
    //     user[0].save(function (err,success){
    //     console.log(err,success);
    //     })
    //     console.log(err , user) ;
    // })
    var Branch = new CompanyModel(UserObj);
    Branch.save(function (err, success) {
        if (!err) {
            deferred.resolve(success);
            console.log('from saving Company Object', success);
        }
        else {
            console.log('from saving Company Object', err);
        }
    });
    return deferred.promise;
}
exports.SaveBranchObject = SaveBranchObject;
//function finding Data by Company Name
function FindBranchData(UserObject) {
    var deferred = q.defer();
    CompanyModel.findOne(UserObject, function (err, res) {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    });
    return deferred.promise;
}
exports.FindBranchData = FindBranchData;
function FindBranchList(UserObject) {
    var deferred = q.defer();
    CompanyModel.find(UserObject, function (err, res) {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    });
    return deferred.promise;
}
exports.FindBranchList = FindBranchList;
function UpdateBranchObject(id, UserObj) {
    var deferred = q.defer();
    delete UserObj._id;
    console.log(id);
    CompanyModel.findOneAndUpdate({ _id: id }, UserObj, function (err, res) {
        if (!err) {
            deferred.resolve(res);
            console.log(res);
        }
        else {
            deferred.reject("Error occurred while Updating user");
            console.log(err);
        }
    });
    return deferred.promise;
}
exports.UpdateBranchObject = UpdateBranchObject;
function DeleteBranch(data) {
    var id = { _id: data.id };
    CompanyModel.remove(id, function (success) {
        console.log(success);
    });
}
exports.DeleteBranch = DeleteBranch;
