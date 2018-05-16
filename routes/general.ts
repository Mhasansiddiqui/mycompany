/// <reference path="../typings/node/node.d.ts" />

var express = require('express');
import bodyparser = require('body-parser');

var request = require("request");

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDZhMDU1Ny0wMjUyLTQ5NzQtOWRjYy1hMWFlMzAzYTBkNDkifQ.K_qw46gVx9vBlrWolMWogESCM91M6jxK2mIs2KaLAm8"

var ionicPushServer = require('ionic-push-server');

var credentials = {
  IonicApplicationID: "0a715409",
  IonicApplicationAPItoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDZhMDU1Ny0wMjUyLTQ5NzQtOWRjYy1hMWFlMzAzYTBkNDkifQ.K_qw46gVx9vBlrWolMWogESCM91M6jxK2mIs2KaLAm8"
};

import { SaveMessageObject, FindMessageData } from '../database/schema/message'


/*import {branch} from '../branch';
import {admin} from './admin';*/

import { FindUserData, SaveUserObject, FindOneUserData, FindOneData } from './../database/schema/user';
import { FindBranchData, SaveBranchObject } from './../database/schema/branch';
import { FindCustomerData, SaveCustomerObject, CountCustomers } from './../database/schema/customer';
import { SaveUserNotification, FindNotification } from './../database/schema/notification'
import { SaveCampaign } from './../database/schema/campaign'

export var general = express.Router();
general.use(bodyparser.json());
general.use(bodyparser.urlencoded({ extended: false }));

general.post('/login', function (req, res) {
  var data = { 'Email': req.body.Email, 'uid': req.query.uid, 'Password': req.body.Password }
  FindOneUserData(data, 'isAdmin').then(function (success) {
    res.send({ status: true, data: success })
  }, function (error) {
    console.log('error', error);
  })
}) -

  general.post('/CreateBranch', (req: express.Request, res: express.Response) => {
    var data = req.body;
    data.uid = req.query.uid;
    data.OwnerId = req.query.OwnerId;
    SaveBranchObject(data)
      .then(function (success) {
        res.send({ status: true })
      }, function (error) {
        res.send({ status: false })
      })
  })

general.post('/CreateCustomer', (req: express.Request, res: express.Response) => {
  var data = req.body;
  data.OwnerId = req.query.OwnerId;

  console.log(data);

  SaveCustomerObject(data).then(function (success) {
    res.send({ status: true, user: success })
  }, function (error) {
    res.send({ status: false, user: error })
  })
});

general.post('/CreateUser', function (req, res) {
  var data = req.body;
  data.OwnerId = req.query.OwnerId;
  console.log(data);



  SaveUserObject(data).then((userInstance) => {


    res.send({ status: true, user: { userInstance } });
  }, (err) => {
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
general.get('/getUsers', function (req, res) {
  var data = {
    OwnerId: req.query.OwnerId,
    _creator: req.query._creator

  };
  //let data = {};
  FindCustomerData(data).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })

})


general.get('/getBranches', function (req, res) {
  var data = { OwnerId: req.query.OwnerId };
  FindBranchData(data).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })

})



general.get('/getProfile', function (req, res) {
  var data = { uid: req.query.uid };
  FindOneData(data).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })

})

general.get('/getCount', function (req, res) {
  var data = { OwnerId: req.query.OwnerId };
  CountCustomers(data).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })


})

general.post('/CreateSms', function (req, _res) {
  let object = req.body;
  if (req.query.OwnerId) {
    object.OwnerId = req.query.OwnerId;
    object.userId = req.query._creator;
  }
  SaveMessageObject(object)
    .then(function (success) {
      object.MessageId = success['_id']
      SaveUserNotification(object)
        .then((res) => {
         FindNotification(object)
          .then((result) => {
            if (result) {
              var notification = {
                "tokens": [result['OwnerId'].token],
                "profile": "testprofile",
                "notification": {
                  "title" : "Template Request",
                  "message" : "hi",                  
                  "android": {
                    "title": "Template Request",
                    "message": result["MessageId"].MessageName
                  }
                }
              }
              ionicPushServer(credentials, notification);
            }
          })

      }, (err) => {
        console.log('Error while saving');
      })
     // console.log('notepad',success)
     _res.send({ status: true, user: { success } });
   

  }, function (err) {
    _res.send({ status: false, message: err });
  })



})

general.get('/GetAllSms', function (req, res) {
  let object = req.body;
  if (req.query.OwnerId) {
    object.OwnerId = req.query.OwnerId;
    object.userId = req.query._creator;
  }
  FindMessageData(object).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })
})

general.get('/GetAllMessages', function (req, res) {
  let object = {};
  if (req.query.OwnerId) {
    object.OwnerId = req.query.OwnerId;
    object.userId = req.query._creator;
  }
  FindMessageData(object).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })
})



general.get('/GetCurrProf', function (req, res) {
  let object = {};
  if (req.query.OwnerId) {
    object.UserID = req.query._creator;
    object._creator = req.query.OwnerId;
  }

  FindBranchData(object).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });


  })
})



general.post('/SaveCampaign', function (req, res) {
  var data = req.body;
  data.OwnerId = req.query.OwnerId;
  data._creator = req.query._creator;

  SaveCampaign(data).then((userInstance) => {
    res.send({ status: true, user: { userInstance } });
  }, (err) => {
    res.send({ status: false, message: err });
  });
});
