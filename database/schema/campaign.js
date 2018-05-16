/// <reference path="../../typings/node/node.d.ts" />
"use strict";
var mongoose = require("mongoose");
var q = require("q");
var Schema = mongoose.Schema;
//create Schema
var CampaignSchema = new mongoose.Schema({
    CampaignName: String,
    CampaignText: String,
    createdOn: { type: Date, "default": Date.now },
    _creator: { type: Schema.Types.ObjectId, ref: 'User' },
    OwnerId: { type: Schema.Types.ObjectId, ref: 'User' },
    SelectedCampaign: [{ type: Schema.ObjectId, ref: 'campaign' }],
    customers: [{ type: Schema.ObjectId, ref: 'Customer' }]
});
var CampaignModel = mongoose.model("campaign", CampaignSchema);
function SaveCampaign(campaign) {
    var deferred = q.defer();
    var _campaign = new CampaignModel(campaign);
    _campaign.save(function (err, success) {
        if (!err) {
            deferred.resolve(success);
        }
        else {
            deferred.reject(err);
        }
    });
    return deferred.promise;
}
exports.SaveCampaign = SaveCampaign;
