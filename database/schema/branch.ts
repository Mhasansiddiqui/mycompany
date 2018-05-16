;/// <reference path="../../typings/node/node.d.ts" />

import mongoose = require('mongoose');
import q = require("q");
import Schema = mongoose.Schema;

// import {connectionToDb}  from './../Connection' ;
// connectionToDb(); 
import { UserModel } from './user'

interface IBranchSchema extends mongoose.Document {
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
    _creator: { type: String, ref: 'User' }

}
//create Schema
let companySchema = new mongoose.Schema({
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
    UserID : { type: Schema.Types.ObjectId, ref: 'User' },
    _creator: { type: Schema.Types.ObjectId, ref: 'User' },
    status :  { type: Boolean , default : true }
})
//compile Schema
let CompanyModel = mongoose.model<IBranchSchema>("Branch", companySchema);

//function saving object

export function SaveBranchObject(UserObj) {

    let deferred = q.defer();
    // UserModel.find({uid : UserObj.uid }, function(err,user){  

    //     console.log(user);              
    //     user[0].branches.push({ branchId :  UserObj.branchId });
    //     user[0].markModified('branches');
    //     user[0].save(function (err,success){
    //     console.log(err,success);

    //     })

    //     console.log(err , user) ;
    // })
    let Branch = new CompanyModel(UserObj);


    Branch.save((err, success) => {
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
//function finding Data by Company Name

export function FindBranchData(UserObject) {
    let deferred = q.defer();
    
    
    CompanyModel.findOne(UserObject, (err, res) => {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    })
    return deferred.promise;

}

export function FindBranchList(UserObject) {
    let deferred = q.defer();
    
    
    CompanyModel.find(UserObject, (err, res) => {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    })
    return deferred.promise;

}


export function UpdateBranchObject(id, UserObj) {
    let deferred = q.defer();
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
    })
    return deferred.promise;
}
export function DeleteBranch(data) {
    var id = { _id: data.id };
    CompanyModel.remove(id, function (success) {
        console.log(success);
    });

}
