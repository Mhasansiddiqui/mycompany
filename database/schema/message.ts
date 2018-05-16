/// <reference path="../../typings/node/node.d.ts" />


import mongoose = require('mongoose');
import q = require("q");


// import {connectionToDb}  from './../Connection' ;
// connectionToDb(); 

interface IMessageSchema extends mongoose.Document {
    MessageName: String,
    createdBy: String,
    createdOn: { type: Date },

}
//create Schema
let MessageSchema = new mongoose.Schema({
    MessageName: String,
    createdBy: String,
    MessasgeBody: String,
    createdOn: { type: Date, default: Date.now },
    userId: String,
    OwnerId: String,
    Status: String

})
//compile Schema
let MessageModel = mongoose.model<IMessageSchema>("Message", MessageSchema);

//function saving object

export function SaveMessageObject(UserObj) {
    let deferred = q.defer();
    let Message = new MessageModel(UserObj);
    Message.save((err, success) => {
        if (!err) {
            deferred.resolve(success);
        }
        else {
            deferred.reject(err);
        }
    });
    return deferred.promise;
}

//function finding Data by Message Name 

export function FindMessageData(UserObject) {
    let deferred = q.defer();
    console.log(UserObject)
    MessageModel.find(UserObject, (err, res) => {
        if (res) {
                
            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    })
    return deferred.promise;

}

export function updateSmsTemplate(data){
    let deferred = q.defer();
    
    MessageModel.findByIdAndUpdate(
        data._id,
         { Status : data.Status },
        { upsert: true },
        function (err, model) {
            if (!err) {
               deferred.resolve(model);
            }
            else {
                deferred.reject("Error occurred while saving user");
            }
        })
         return deferred.promise;
}
