/// <reference path="../../typings/node/node.d.ts" />




import mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);


import q = require("q");
import Schema = mongoose.Schema;

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
export let UserSchema = new mongoose.Schema({
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
    createdOn: { type: Date, default: Date.now },
    customers: [{ type: Schema.ObjectId, ref: 'Customer' }],
    branches: [{ type: Schema.ObjectId, ref: 'Branch' }],
    _creator: { type: Schema.Types.ObjectId, ref: 'User' },
    Users: [{ type: Schema.ObjectId, ref: 'User' }],
    token: String
    //branches : [] 


})

UserSchema.plugin(deepPopulate, {
    populate: {
        'Users': {
            select: 'token -_id',


        }
    }
})


//compile Schema
export var UserModel = mongoose.model<any>("User", UserSchema);


export var FindToken = function (data) {
    //console.log(data);
    let deferred = q.defer();
    UserModel
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

}


//function saving object 
export function SaveUserObject(UserObj) {

    let deferred = q.defer();
    let User = new UserModel(UserObj);
    User.save((err, success) => {
        if (success) {
            updateUser(success)
            deferred.resolve({ status: true, success: success });
        }
        else {
            console.log(err)
            deferred.reject({ status: false, success: err });
        }
    });
    return deferred.promise;

}

function updateUser(data) {
    UserModel.findByIdAndUpdate(
        data.OwnerId,
        { $push: { Users: { _id: data._id } } },
        { upsert: true },
        function (err, model) {
            if (!err) {
                console.log(model)
            }
            else {
                console.log(err)
            }
        })

}

//function finding Data by User Name 

export function FindUserData(UserObject) {
    let deferred = q.defer();
    UserModel.find(UserObject, (err, res) => {
        if (res) {

            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    })
    return deferred.promise;
}



export function FindOneUserData(condition, fields) {
    let deferred = q.defer();
    UserModel.find(condition, fields, (err, res) => {
        if (res) {

            deferred.resolve(res);
        }
        else {
            deferred.reject("Error occurred while saving user");
        }
    })
    return deferred.promise;
}

export function FindOneData(condition) {
    let deferred = q.defer();

    UserModel.findOne(condition, (err, res) => {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject(err);
        }
    })
    return deferred.promise;
}

export function FindOneAndUpdateData(query, condition) {
    let deferred = q.defer();

    console.log(query, condition)
    UserModel.findOneAndUpdate(query, condition, { new: true }, (err, res) => {
        if (res) {

            deferred.resolve({ status: true, success: res });
        }
        else {
            deferred.reject({ status: false, success: err });
        }
    })
    return deferred.promise;
}