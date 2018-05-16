

import mongoose = require('mongoose');
import q = require("q");
import Schema = mongoose.Schema;

let ReminderSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },    
    OwnerId: { type: Schema.Types.ObjectId, ref: 'User' },
    title : String,
    body : String,
    UsersId: [{ type: Schema.ObjectId, ref: 'User' }]
})

let ReminderModel = mongoose.model<any>("reminder", ReminderSchema);

 export function SaveReminder(UserObj) {
    let deferred = q.defer();
    let reminder = new ReminderModel(UserObj);
    reminder.save((err, success) => {
        if (!err) {
            FindUsers(success);
            deferred.resolve(success);
        }
        else {
            
            deferred.reject(err);
        }
    })
    return deferred.promise;
}
function FindUsers(success){
    ReminderModel
    .findOne({ _id :success._id })
    .populate('UsersId')
    .populate('OwnerId')
    .exec((err, res) => {
            if (res) {               
                console.log(res)
            }
            else {               
                console.log(err)
            }
        })
}