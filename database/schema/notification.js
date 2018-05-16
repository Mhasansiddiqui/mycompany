"use strict";
var mongoose = require("mongoose");
var q = require("q");
var Schema = mongoose.Schema;
//var deepPopulate = require('mongoose-deep-populate')(mongoose);
var user_1 = require("./user");
var UserNotificationSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    notificationType: String,
    OwnerId: { type: Schema.Types.ObjectId, ref: 'User' },
    MessageId: { type: Schema.Types.ObjectId, ref: 'Message' }
});
var UserNotificationModel = mongoose.model("notification", UserNotificationSchema);
function SaveUserNotification(UserObj) {
    var deferred = q.defer();
    var User = new UserNotificationModel(UserObj);
    User.save(function (err, success) {
        if (!err) {
            //SendNotification({OwnerId:success.OwnerId,userId:success.userId});
            // console.log('inside notification',UserObj)
            deferred.resolve(success);
        }
        else {
            console.log(err);
            deferred.reject(err);
        }
    });
    return deferred.promise;
}
exports.SaveUserNotification = SaveUserNotification;
function FindNotification(success) {
    var deferred = q.defer();
    UserNotificationModel
        .findOne({ OwnerId: success.OwnerId, userId: success.userId, MessageId: success.MessageId })
        .populate('userId')
        .populate('OwnerId')
        .populate('MessageId')
        .exec(function (err, res) {
        if (res) {
            deferred.resolve(res);
        }
        else {
            deferred.reject(err);
        }
    });
    return deferred.promise;
}
exports.FindNotification = FindNotification;
function FindNotificationData(success) {
    var deferred = q.defer();
    user_1.FindToken({ _id: success.OwnerId })
        .then(function (res) {
        deferred.resolve(res);
    }, function (err) {
        deferred.reject(err);
    });
    /*  User.find({OwnerId: success.OwnerId})
      .deepPopulate('customers._id')
      .exec(function (err, post) { if(!err){ console.log(post) } });*/
    /*UserNotificationModel.find({ OwnerId: success.OwnerId, userId: success.userId , MessageId : success.MessageId})
        .populate('userId')
        .populate('OwnerId')
        .populate('MessageId')
        ;.exec((err, res) => {
            if (res) {
               
                  deferred.resolve(res);
            }
            else {
               
                deferred.reject(err);
            }
        })*/
    return deferred.promise;
}
exports.FindNotificationData = FindNotificationData;
