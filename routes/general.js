/// <reference path="../typings/node/node.d.ts" />
"use strict";
var express = require('express');
var bodyparser = require("body-parser");
var request = require("request");
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDZhMDU1Ny0wMjUyLTQ5NzQtOWRjYy1hMWFlMzAzYTBkNDkifQ.K_qw46gVx9vBlrWolMWogESCM91M6jxK2mIs2KaLAm8";
var ionicPushServer = require('ionic-push-server');
var credentials = {
    IonicApplicationID: "0a715409",
    IonicApplicationAPItoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDZhMDU1Ny0wMjUyLTQ5NzQtOWRjYy1hMWFlMzAzYTBkNDkifQ.K_qw46gVx9vBlrWolMWogESCM91M6jxK2mIs2KaLAm8"
};
var message_1 = require("../database/schema/message");
/*import {branch} from '../branch';
import {admin} from './admin';*/
var user_1 = require("./../database/schema/user");
var branch_1 = require("./../database/schema/branch");
var customer_1 = require("./../database/schema/customer");
var notification_1 = require("./../database/schema/notification");
var campaign_1 = require("./../database/schema/campaign");
exports.general = express.Router();
exports.general.use(bodyparser.json());
exports.general.use(bodyparser.urlencoded({ extended: false }));
exports.general.post('/login', function (req, res) {
    var data = { 'Email': req.body.Email, 'uid': req.query.uid, 'Password': req.body.Password };
    user_1.FindOneUserData(data, 'isAdmin').then(function (success) {
        res.send({ status: true, data: success });
    }, function (error) {
        console.log('error', error);
    });
}) -
    exports.general.post('/CreateBranch', function (req, res) {
        var data = req.body;
        data.uid = req.query.uid;
        data.OwnerId = req.query.OwnerId;
        branch_1.SaveBranchObject(data)
            .then(function (success) {
            res.send({ status: true });
        }, function (error) {
            res.send({ status: false });
        });
    });
exports.general.post('/CreateCustomer', function (req, res) {
    var data = req.body;
    data.OwnerId = req.query.OwnerId;
    console.log(data);
    customer_1.SaveCustomerObject(data).then(function (success) {
        res.send({ status: true, user: success });
    }, function (error) {
        res.send({ status: false, user: error });
    });
});
exports.general.post('/CreateUser', function (req, res) {
    var data = req.body;
    data.OwnerId = req.query.OwnerId;
    console.log(data);
    user_1.SaveUserObject(data).then(function (userInstance) {
        res.send({ status: true, user: { userInstance: userInstance } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
// general.get('/FindUser',(req,res)=>{
//   findCreator().then(function (success) {
//     res.send({status: true})
//   },function(error){
//     res.send({status: false})
//   })
// })
exports.general.get('/getUsers', function (req, res) {
    var data = {
        OwnerId: req.query.OwnerId,
        _creator: req.query._creator
    };
    //let data = {};
    customer_1.FindCustomerData(data).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.general.get('/getBranches', function (req, res) {
    var data = { OwnerId: req.query.OwnerId };
    branch_1.FindBranchData(data).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.general.get('/getProfile', function (req, res) {
    var data = { uid: req.query.uid };
    user_1.FindOneData(data).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.general.get('/getCount', function (req, res) {
    var data = { OwnerId: req.query.OwnerId };
    customer_1.CountCustomers(data).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.general.post('/CreateSms', function (req, _res) {
    var object = req.body;
    if (req.query.OwnerId) {
        object.OwnerId = req.query.OwnerId;
        object.userId = req.query._creator;
    }
    message_1.SaveMessageObject(object)
        .then(function (success) {
        object.MessageId = success['_id'];
        notification_1.SaveUserNotification(object)
            .then(function (res) {
            notification_1.FindNotification(object)
                .then(function (result) {
                if (result) {
                    var notification = {
                        "tokens": [result['OwnerId'].token],
                        "profile": "testprofile",
                        "notification": {
                            "title": "Template Request",
                            "message": "hi",
                            "android": {
                                "title": "Template Request",
                                "message": result["MessageId"].MessageName
                            }
                        }
                    };
                    ionicPushServer(credentials, notification);
                }
            });
        }, function (err) {
            console.log('Error while saving');
        });
        // console.log('notepad',success)
        _res.send({ status: true, user: { success: success } });
    }, function (err) {
        _res.send({ status: false, message: err });
    });
});
exports.general.get('/GetAllSms', function (req, res) {
    var object = req.body;
    if (req.query.OwnerId) {
        object.OwnerId = req.query.OwnerId;
        object.userId = req.query._creator;
    }
    message_1.FindMessageData(object).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.general.get('/GetAllMessages', function (req, res) {
    var object = {};
    if (req.query.OwnerId) {
        object.OwnerId = req.query.OwnerId;
        object.userId = req.query._creator;
    }
    message_1.FindMessageData(object).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.general.get('/GetCurrProf', function (req, res) {
    var object = {};
    if (req.query.OwnerId) {
        object.UserID = req.query._creator;
        object._creator = req.query.OwnerId;
    }
    branch_1.FindBranchData(object).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.general.post('/SaveCampaign', function (req, res) {
    var data = req.body;
    data.OwnerId = req.query.OwnerId;
    data._creator = req.query._creator;
    campaign_1.SaveCampaign(data).then(function (userInstance) {
        res.send({ status: true, user: { userInstance: userInstance } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
