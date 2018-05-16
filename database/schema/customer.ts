/// <reference path="../../typings/node/node.d.ts" />

import mongoose = require('mongoose');
import q = require("q");
import { UserModel } from './User';
//var deepPopulate = require('mongoose-deep-populate')(mongoose);

var Schema = mongoose.Schema

// import {connectionToDb}  from './../Connection' ;
// connectionToDb(); 

interface ICustomerSchema extends mongoose.Document {
  CustomerName: String,
  createdBy: String,
  createdOn: { type: Date },
}
//create Schema
let customerSchema = new mongoose.Schema({
  CustomerName: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
  MobileNo: String,
  CustomerEmail: String,
  CustomerBranch: Schema.Types.Mixed,
  customers: [{type: Schema.ObjectId,  ref: 'Customer' }],
  OwnerId : String,
  _creator: { type: String, ref: 'User' },
  Sms: { type: Schema.Types.ObjectId, ref: 'Message' }
})
//create Schema
let relatedCustomers = new mongoose.Schema({
  _creator: { type: Schema.Types.ObjectId, ref: 'User' },
  _id: { type: Schema.Types.ObjectId, ref: 'Customer' },
  relatedCustomers: [{ type: Schema.Types.ObjectId, ref: 'Customer' }]
})
//relatedCustomers.plugin(deepPopulate);

let CustomerRelatedModel = mongoose.model<ICustomerSchema>("relatedCustomers", relatedCustomers);

//compile Schema
let CustomerModel = mongoose.model<ICustomerSchema>("Customer", customerSchema);
//function saving object 

export function SaveCustomerObject(UserObj) {

  console.log(UserObj);
  let deferred = q.defer();
  //console.log(UserObj);
  //UserObj.customers = UserObj.RelatedCustomer;

  //console.log(UserObj);
  var NewCustomer = new CustomerModel(UserObj);
  NewCustomer.save(function (err, res) {
    if (!err) {

      var NewBunch = new CustomerRelatedModel({ _creator: UserObj.OwnerId, relatedCustomers: UserObj.customers, _id: NewCustomer._id });
      NewBunch.save(function (err, res) {
        if (!err) {
          //deferred.resolve(res);
         // console.log(res);
        }
        else {
          deferred.reject("Error occurred while saving user");
          console.log(err);
        }
      })
      deferred.resolve(res);

    }
    else {
      deferred.reject("Error occurred while saving user");
      console.log(err);
    }
  })

  return deferred.promise;
}

//function Update object 

export function UpdateCustomerObject(id, UserObj) {

  let deferred = q.defer();
  //console.log(UserObj);
  //UserObj.customers = UserObj.RelatedCustomer;

  //console.log(UserObj);
  delete UserObj._id;

  console.log(id);
  CustomerModel.findOneAndUpdate({ _id: id }, UserObj, function (err, res) {
    if (!err) {
      var data = { _creator: UserObj.OwnerId, relatedCustomers: UserObj.customers }
      CustomerRelatedModel.findOneAndUpdate({ _id: id }, data, function (err, res) {
        if (!err) {
          deferred.resolve(res);
          console.log(res);
        }
        else {
          deferred.reject("Error occurred while Updating user");
          console.log(err);
        }
      })

    }
    else {
      deferred.reject("Error occurred while Updating user");
      console.log(err);
    }
  })
  return deferred.promise;
}
export function DeleteCustomer(data) {
  var id = { _id: data.id };
  CustomerModel.remove(id, function (success) {
    console.log(success);
  });

}


//function finding Data by Customer Name 

export function FindRelatedCustomerData(data) {
  let deferred = q.defer();
  // var data = { _id: '576c5ce2258230e41b94d658' };
  CustomerRelatedModel
    .find(data)
    .populate('relatedCustomers')
    .exec(function (err, docs) {
      if (err) {
        return
      }
      var res = [];
      docs[0].relatedCustomers.forEach(function (succ) {
        res.push(succ);
      })
      deferred.resolve(res);
    })
  return deferred.promise;
}


export function FindCustomerData(UserObject) {

  //console.log('data');      

  let deferred = q.defer();
  CustomerModel.find(UserObject, (err, res) => {
    if (res) {

      deferred.resolve(res);
    }
    else {
      deferred.reject("Error occurred while saving user");
    }
  })
  return deferred.promise;
}
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





export function CountCustomers(UserObject) {
  let deferred = q.defer();
  CustomerModel.count(UserObject, (err, res) => {
    if (res) {

      deferred.resolve(res);
    }
    else {
      deferred.reject("Error occurred while saving user");
    }
  })
  return deferred.promise;

}