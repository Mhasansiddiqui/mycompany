"use strict";
var mongoose = require("mongoose");
var q = require("q");
var Schema = mongoose.Schema;
var ReminderSchema = new mongoose.Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    OwnerId: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    body: String,
    UsersId: [{ type: Schema.ObjectId, ref: 'User' }]
});
var ReminderModel = mongoose.model("reminder", ReminderSchema);
function SaveReminder(UserObj) {
    var deferred = q.defer();
    var reminder = new ReminderModel(UserObj);
    reminder.save(function (err, success) {
        if (!err) {
            FindUsers(success);
            deferred.resolve(success);
        }
        else {
            deferred.reject(err);
        }
    });
    return deferred.promise;
}
exports.SaveReminder = SaveReminder;
function FindUsers(success) {
    ReminderModel
        .findOne({ _id: success._id })
        .populate('UsersId')
        .populate('OwnerId')
        .exec(function (err, res) {
        if (res) {
            console.log(res);
        }
        else {
            console.log(err);
        }
    });
}
