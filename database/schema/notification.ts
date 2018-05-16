import mongoose = require('mongoose');
import q = require("q");
import Schema = mongoose.Schema;

//var deepPopulate = require('mongoose-deep-populate')(mongoose);

import {FindToken} from './user'


let UserNotificationSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    notificationType: String,
    OwnerId: { type: Schema.Types.ObjectId, ref: 'User' },
    MessageId: { type: Schema.Types.ObjectId, ref: 'Message' }
})

let UserNotificationModel = mongoose.model<any>("notification", UserNotificationSchema);


export function SaveUserNotification(UserObj) {
    let deferred = q.defer();

    let User = new UserNotificationModel(UserObj);


    User.save((err, success) => {
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
export function FindNotification(success) {

 let deferred = q.defer();
    


    UserNotificationModel
    .findOne({ OwnerId: success.OwnerId, userId: success.userId , MessageId : success.MessageId})
        .populate('userId')
        .populate('OwnerId')
        .populate('MessageId')
        .exec((err, res) => {
            if (res) {
               
                  deferred.resolve(res);
            }
            else {
               
                deferred.reject(err);
            }
        })
    return deferred.promise;
}
    

export function FindNotificationData(success) {

 let deferred = q.defer();
    FindToken({_id: success.OwnerId })
    .then((res)=>{
        
        deferred.resolve(res);
    },(err)=>{
        deferred.reject(err);
    })
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


