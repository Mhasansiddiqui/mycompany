/// <reference path="../../typings/node/node.d.ts" />
"use strict";
var mongoose = require("mongoose");
var q = require("q");
//var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Schema = mongoose.Schema;
//create Schema
var customerSchema = new mongoose.Schema({
    CustomerName: String,
    createdBy: String,
    createdOn: { type: Date, "default": Date.now },
    MobileNo: String,
    CustomerEmail: String,
    CustomerBranch: Schema.Types.Mixed,
    customers: [{ type: Schema.ObjectId, ref: 'Customer' }],
    OwnerId: String,
    _creator: { type: String, ref: 'User' },
    Sms: { type: Schema.Types.ObjectId, ref: 'Message' }
});
//create Schema
var relatedCustomers = new mongoose.Schema({
    _creator: { type: Schema.Types.ObjectId, ref: 'User' },
    _id: { type: Schema.Types.ObjectId, ref: 'Customer' },
    relatedCustomers: [{ type: Schema.Types.ObjectId, ref: 'Customer' }]
});
//relatedCustomers.plugin(deepPopulate);
var CustomerRelatedModel = mongoose.model("relatedCustomers", relatedCustomers);
//compile Schema
var CustomerModel = mongoose.model("Customer", customerSchema);
//function saving object 
function SaveCustomerObject(UserObj) {
    console.log(UserObj);
    var deferred = q.defer();
    //console.log(UserObj);
    //UserObj.customers = UserObj.RelatedCustomer;
    //console.log(UserObj);
    var NewCustomer = new CustomerModel(UserObj);
    NewCustomer.save(function (err, res) {
        if (!err) {
            var NewBunch = new CustomerRelatedModel({ _creator: UserObj.OwnerId, relatedCustomers: UserObj.customers, _id: NewCustomer._id });
            NewBunch.save(function (err, res) {
                if (!err) {
                }
                else {
                    deferred.reject("Error occurred while saving user");
                    console.log(err);
                }
            });
            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
            console.log(err);
        }
    });
    return deferred.promise;
}
exports.SaveCustomerObject = SaveCustomerObject;
//function Update object 
function UpdateCustomerObject(id, UserObj) {
    var deferred = q.defer();
    //console.log(UserObj);
    //UserObj.customers = UserObj.RelatedCustomer;
    //console.log(UserObj);
    delete UserObj._id;
    console.log(id);
    CustomerModel.findOneAndUpdate({ _id: id }, UserObj, function (err, res) {
        if (!err) {
            var data = { _creator: UserObj.OwnerId, relatedCustomers: UserObj.customers };
            CustomerRelatedModel.findOneAndUpdate({ _id: id }, data, function (err, res) {
                if (!err) {
                    deferred.resolve(res);
                    console.log(res);
                }
                else {
                    deferred.reject("Error occurred while Updating user");
                    console.log(err);
                }
            });
        }
        else {
            deferred.reject("Error occurred while Updating user");
            console.log(err);
        }
    });
    return deferred.promise;
}
exports.UpdateCustomerObject = UpdateCustomerObject;
function DeleteCustomer(data) {
    var id = { _id: data.id };
    CustomerModel.remove(id, function (success) {
        console.log(success);
    });
}
exports.DeleteCustomer = DeleteCustomer;
//function finding Data by Customer Name 
function FindRelatedCustomerData(data) {
    var deferred = q.defer();
    // var data = { _id: '576c5ce2258230e41b94d658' };
    CustomerRelatedModel
        .find(data)
        .populate('relatedCustomers')
        .exec(function (err, docs) {
        if (err) {
            return;
        }
        var res = [];
        docs[0].relatedCustomers.forEach(function (succ) {
            res.push(succ);
        });
        deferred.resolve(res);
    });
    return deferred.promise;
}
exports.FindRelatedCustomerData = FindRelatedCustomerData;
function FindCustomerData(UserObject) {
    //console.log('data');      
    var deferred = q.defer();
    CustomerModel.find(UserObject, function (err, res) {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    });
    return deferred.promise;
}
exports.FindCustomerData = FindCustomerData;
//  export function findCreator(){
//      let deferred = q.defer();
//      CustomerModel.find({}).populate('_creator').exec(function(err , res){
//          if(res){             
// 			deferred.resolve(res);
//           }
//           else{
//            deferred.reject("Error occurred while saving user");   
//           }
//      })  
//    return deferred.promise;
// } 
function CountCustomers(UserObject) {
    var deferred = q.defer();
    CustomerModel.count(UserObject, function (err, res) {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    });
    return deferred.promise;
}
exports.CountCustomers = CountCustomers;
