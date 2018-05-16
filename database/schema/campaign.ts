/// <reference path="../../typings/node/node.d.ts" />

import mongoose = require('mongoose');
import q = require("q");

var Schema = mongoose.Schema

//create Schema
let CampaignSchema = new mongoose.Schema({
    CampaignName: String,
    CampaignText: String,
    createdOn: { type: Date, default: Date.now },
    _creator: { type: Schema.Types.ObjectId, ref: 'User' },
    OwnerId: { type: Schema.Types.ObjectId, ref: 'User' },
    SelectedCampaign: [{ type: Schema.ObjectId, ref: 'campaign' }],
    customers: [{type: Schema.ObjectId,  ref: 'Customer' }]
})

let CampaignModel = mongoose.model<any>("campaign", CampaignSchema);

export function SaveCampaign(campaign){
    let deferred = q.defer();

    let _campaign  = new CampaignModel(campaign)
    _campaign.save(function(err,success){
        if(!err){
             deferred.resolve(success);
        }
        else{
             deferred.reject(err);
        }
    })
    return deferred.promise;
}