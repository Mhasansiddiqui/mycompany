/// <reference path="../typings/node/node.d.ts" />
"use strict";
var express = require('express');
var bodyparser = require("body-parser");
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDZhMDU1Ny0wMjUyLTQ5NzQtOWRjYy1hMWFlMzAzYTBkNDkifQ.K_qw46gVx9vBlrWolMWogESCM91M6jxK2mIs2KaLAm8";
var ionicPushServer = require('ionic-push-server');
var credentials = {
    IonicApplicationID: "0a715409",
    IonicApplicationAPItoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDZhMDU1Ny0wMjUyLTQ5NzQtOWRjYy1hMWFlMzAzYTBkNDkifQ.K_qw46gVx9vBlrWolMWogESCM91M6jxK2mIs2KaLAm8"
};
var user_1 = require("./../database/schema/user");
var branch_1 = require("./../database/schema/branch");
var customer_1 = require("./../database/schema/customer");
var campaign_1 = require("./../database/schema/campaign");
var notification_1 = require("./../database/schema/notification");
var reminder_1 = require("./../database/schema/reminder");
var message_1 = require("../database/schema/message");
exports.admin = express.Router();
exports.admin.use(bodyparser.json());
exports.admin.use(bodyparser.urlencoded({ extended: false }));
exports.admin.get('/', function (req, res) {
    res.send(req);
});
exports.admin.post('/CreateBranch', function (req, res) {
    var data = req.body;
    if (req.query._creator) {
        data._creator = req.query._creator;
    }
    branch_1.SaveBranchObject(data)
        .then(function (userInstance) {
        res.send({ status: true, user: userInstance });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.put('/UpdateBrach', function (req, res) {
    res.send('Update the brach');
});
exports.admin["delete"]('/DeleteBrach', function (req, res) {
});
exports.admin.get('/ViewCustomer', function (req, res) {
    res.send('Get a ViewCustomer book');
});
exports.admin.post('/CreateCustomer', function (req, res) {
    var data = req.body;
    data.OwnerId = req.query.OwnerId;
    customer_1.SaveCustomerObject(data).then(function (userInstance) {
        res.send({ status: true, user: userInstance });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.post('/UpdateCustomer', function (req, res) {
    //console.log(req.body);
    var id = req.body._id;
    console.log(id, req.body);
    var data = req.body;
    customer_1.UpdateCustomerObject(id, data).then(function (userInstance) {
        res.send({ status: true, user: userInstance });
    }, function (err) {
        res.send({ status: false, message: err });
    });
    // console.log('update');
    // res.send('Update the UpdateCustomer');
});
exports.admin["delete"]('/DeleteCustomer/', function (req, res) {
    customer_1.DeleteCustomer(req.query);
    res.send('deleted');
});
exports.admin.get('/ViewUser', function (req, res) {
    var object = { companyId: req.query.id };
    // SaveUserObject(object).then((userInstance)=>{
    // 				res.send({status : true, user : userInstance});
    // 			}, (err)=>{
    // 				res.send({status: false, message : err});
    // 			});
    //console.log(object);
});
exports.admin.post('/CreateUser', function (req, res) {
    var data = req.body;
    if (req.query.OwnerId && req.query._creator) {
        data._creator = req.query._creator;
        data.OwnerId = req.query.OwnerId;
    }
    else {
        data._creator = req.query._creator;
        data.OwnerId = req.query._creator;
    }
    user_1.SaveUserObject(data).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.put('/UpdateUser', function (req, res) {
    res.send('Update the UpdateCustomer');
});
exports.admin["delete"]('/DeleteUser', function (req, res) {
    res.send('Delete DeleteUser');
});
exports.admin.get('/getRelatedCustomer/', function (req, res) {
    // console.log('getRealtedCustomers',req.body);
    //  var data = { OwnerId :  req.query.OwnerId } ;
    var data = { _id: req.query.id };
    customer_1.FindRelatedCustomerData(data).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.get('/getCustomers', function (req, res) {
    var data = req.body;
    data.OwnerId = req.query.OwnerId;
    customer_1.FindCustomerData({ OwnerId: req.query.OwnerId }).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.get('/getUsers', function (req, res) {
    var data = req.body;
    if (req.query.OwnerId && req.query._creator) {
        data._creator = req.query._creator;
        data.OwnerId = req.query.OwnerId;
    }
    else {
        data._creator = req.query._creator;
        data.OwnerId = req.query._creator;
    }
    user_1.FindUserData(data).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.get('/GetAllSms', function (req, res) {
    message_1.FindMessageData({ OwnerId: req.query.OwnerId }).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.get('/GetAllMessages', function (req, res) {
    message_1.FindMessageData({ OwnerId: req.query.OwnerId }).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.get('/getProfile', function (req, res) {
    var data = { uid: req.query.uid };
    user_1.FindOneData(data).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.get('/getBranches', function (req, res) {
    console.log(req.query._creator);
    branch_1.FindBranchList({ _creator: req.query._creator }).then(function (success) {
        res.send({ status: true, user: { success: success } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.get('/getNotification', function (req, res) {
    var data = {
        notification: {
            title: 'aaaa',
            message: 'bbbbb',
            icon: 'cccc',
            notificationTag: 'dddd'
        }
    };
    res.send(data);
});
/*admin.post('/sendNotification', function (req, res) {

  var endpoint = req.body.endpoint;
  var gcm = require('node-gcm');
  var message = new gcm.Message({
    data: {
      notification: {
        title: 'aaaa',
        message: 'bbbbb',
        icon: 'cccc',
        notificationTag: 'dddd'
      }
    }
  });
  // Set up the sender with you API key, prepare your recipients' registration tokens.
  var sender = new gcm.Sender('AIzaSyDOFS42pZs4-iCI3SqsaJRbYBi6rgdwNhM');
  var regTokens = [endpoint.toString()];
  sender.send(message, { registrationTokens: regTokens }, function (err, response) {
    if (err) console.error(err);
    else console.log('res', response);
  });
  res.send({ data: 'ok' });
})*/
exports.admin.post('/sendNotification', function (req, res) {
});
exports.admin.get('/getBranch/', function (req, res) {
    console.log('getting branch');
});
exports.admin.post('/UpdateBranch', function (req, res) {
    //console.log(req.body);
    var id = req.body._id;
    console.log(id, req.body);
    var data = req.body;
    branch_1.UpdateBranchObject(id, data).then(function (userInstance) {
        res.send({ status: true, user: userInstance });
    }, function (err) {
        res.send({ status: false, message: err });
    });
    // console.log('update');
    // res.send('Update the UpdateCustomer');
});
exports.admin["delete"]('/DeleteBranch/', function (req, res) {
    console.log('deleting branch');
});
exports.admin.post('/SaveCampaign', function (req, res) {
    var data = req.body;
    data.OwnerId = req.query.OwnerId;
    data._creator = req.query._creator;
    campaign_1.SaveCampaign(data).then(function (userInstance) {
        res.send({ status: true, user: { userInstance: userInstance } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.post('/SaveReminder', function (req, res) {
    var data = req.body;
    data.OwnerId = req.query.OwnerId;
    data._creator = req.query._creator;
    reminder_1.SaveReminder(data).then(function (userInstance) {
        res.send({ status: true, user: { userInstance: userInstance } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
exports.admin.post('/CreateSms', function (req, _res) {
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
            notification_1.FindNotificationData(object)
                .then(function (result) {
                if (result) {
                    console.log('coming from test', result['Users']);
                    var tokens_1 = [];
                    result['Users'].forEach(function (token) {
                        tokens_1.push(token.token);
                    });
                    var notification = {
                        "tokens": tokens_1,
                        "profile": "testprofile",
                        "notification": {
                            "title": "New Template added",
                            "message": "hi",
                            "android": {
                                "title": "New Template added",
                                "message": "new template added" //result["MessageId"].MessageName
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
exports.admin.post('/UpdateSmsTemp', function (req, res) {
    var data = req.body;
    message_1.updateSmsTemplate(data)
        .then(function (userInstance) {
        res.send({ status: true, user: { userInstance: userInstance } });
    }, function (err) {
        res.send({ status: false, message: err });
    });
});
