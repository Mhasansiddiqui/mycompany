/// <reference path="../typings/node/node.d.ts" />

let express = require('express');
import bodyparser = require('body-parser');

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDZhMDU1Ny0wMjUyLTQ5NzQtOWRjYy1hMWFlMzAzYTBkNDkifQ.K_qw46gVx9vBlrWolMWogESCM91M6jxK2mIs2KaLAm8"

var ionicPushServer = require('ionic-push-server');

var credentials = {
  IonicApplicationID: "0a715409",
  IonicApplicationAPItoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MDZhMDU1Ny0wMjUyLTQ5NzQtOWRjYy1hMWFlMzAzYTBkNDkifQ.K_qw46gVx9vBlrWolMWogESCM91M6jxK2mIs2KaLAm8"
};


import { FindUserData, SaveUserObject, FindOneData } from './../database/schema/user';
import { FindBranchData, FindBranchList, SaveBranchObject, UpdateBranchObject, DeleteBranch } from './../database/schema/branch';
import { FindCustomerData, SaveCustomerObject, FindRelatedCustomerData, UpdateCustomerObject, DeleteCustomer } from './../database/schema/customer';

import { SaveCampaign } from './../database/schema/campaign'
import { SaveUserNotification, FindNotification, FindNotificationData } from './../database/schema/notification'
import { SaveReminder } from './../database/schema/reminder'

import { SaveMessageObject, FindMessageData ,updateSmsTemplate } from '../database/schema/message'


export var admin = express.Router();

admin.use(bodyparser.json());
admin.use(bodyparser.urlencoded({ extended: false }));

admin.get('/', function (req, res) {
  res.send(req);
})
admin.post('/CreateBranch', function (req, res) {
  var data = req.body;
  if (req.query._creator) {
    data._creator = req.query._creator;
  }

  SaveBranchObject(data)
    .then((userInstance) => {
      res.send({ status: true, user: userInstance });
    }, (err) => {
      res.send({ status: false, message: err });
    });
})
admin.put('/UpdateBrach', function (req, res) {
  res.send('Update the brach');
});
admin.delete('/DeleteBrach', function (req, res) {

});


admin.get('/ViewCustomer', function (req, res) {
  res.send('Get a ViewCustomer book');
});



admin.post('/CreateCustomer', function (req, res) {
  var data = req.body;
  data.OwnerId = req.query.OwnerId;

  SaveCustomerObject(data).then((userInstance) => {
    res.send({ status: true, user: userInstance });
  }, (err) => {
    res.send({ status: false, message: err });
  });

})



admin.post('/UpdateCustomer', function (req, res) {

  //console.log(req.body);
  var id = req.body._id;
  console.log(id, req.body);
  var data = req.body;
  UpdateCustomerObject(id, data).then((userInstance) => {
    res.send({ status: true, user: userInstance });
  }, (err) => {
    res.send({ status: false, message: err });
  });
  // console.log('update');
  // res.send('Update the UpdateCustomer');
});




admin.delete('/DeleteCustomer/', function (req, res) {
  DeleteCustomer(req.query);
  res.send('deleted');

});

admin.get('/ViewUser', function (req, res) {
  var object = { companyId: req.query.id }
  // SaveUserObject(object).then((userInstance)=>{
  // 				res.send({status : true, user : userInstance});
  // 			}, (err)=>{
  // 				res.send({status: false, message : err});
  // 			});
  //console.log(object);

});
admin.post('/CreateUser', function (req, res) {

  let data = req.body;
  if (req.query.OwnerId && req.query._creator) {
    data._creator = req.query._creator;
    data.OwnerId = req.query.OwnerId;
  }
  else {
    data._creator = req.query._creator;
    data.OwnerId = req.query._creator;
  }


  SaveUserObject(data).then((success) => {

    res.send({ status: true, user: { success } });
  }, (err) => {
    res.send({ status: false, message: err });
  });
});
admin.put('/UpdateUser', function (req, res) {
  res.send('Update the UpdateCustomer');
});
admin.delete('/DeleteUser', function (req, res) {
  res.send('Delete DeleteUser');
});


admin.get('/getRelatedCustomer/', function (req, res) {

  // console.log('getRealtedCustomers',req.body);
  //  var data = { OwnerId :  req.query.OwnerId } ;
  var data = { _id: req.query.id }

  FindRelatedCustomerData(data).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })
})


admin.get('/getCustomers', function (req, res) {

  let data = req.body;
  data.OwnerId = req.query.OwnerId;

  FindCustomerData({ OwnerId: req.query.OwnerId }).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })
})

admin.get('/getUsers', function (req, res) {
  let data = req.body;
  if (req.query.OwnerId && req.query._creator) {
    data._creator = req.query._creator;
    data.OwnerId = req.query.OwnerId;
  }
  else {
    data._creator = req.query._creator;
    data.OwnerId = req.query._creator;
  }

  FindUserData(data).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })

})
admin.get('/GetAllSms', function (req, res) {

  FindMessageData({ OwnerId: req.query.OwnerId }).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })
})

admin.get('/GetAllMessages', function (req, res) {

  FindMessageData({ OwnerId: req.query.OwnerId }).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })
})

admin.get('/getProfile', function (req, res) {

  var data = { uid: req.query.uid };
  FindOneData(data).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })

})

admin.get('/getBranches', function (req, res) {
  console.log(req.query._creator)
  FindBranchList({ _creator: req.query._creator }).then(function (success) {
    res.send({ status: true, user: { success } });
  }, function (err) {
    res.send({ status: false, message: err });
  })

})


admin.get('/getNotification', function (req, res) {


  var data = {
    notification: {
      title: 'aaaa',
      message: 'bbbbb',
      icon: 'cccc',
      notificationTag: 'dddd'
    }
  }
  res.send(data);

})


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

admin.post('/sendNotification', function (req, res) {

})

admin.get('/getBranch/', function (req, res) {
  console.log('getting branch');
})


admin.post('/UpdateBranch', function (req, res) {


  //console.log(req.body);
  var id = req.body._id;
  console.log(id, req.body);
  var data = req.body;
  UpdateBranchObject(id, data).then((userInstance) => {
    res.send({ status: true, user: userInstance });
  }, (err) => {
    res.send({ status: false, message: err });
  });
  // console.log('update');
  // res.send('Update the UpdateCustomer');
});


admin.delete('/DeleteBranch/', function (req, res) {
  console.log('deleting branch');
})



admin.post('/SaveCampaign', function (req, res) {
  var data = req.body;
  data.OwnerId = req.query.OwnerId;
  data._creator = req.query._creator;

  SaveCampaign(data).then((userInstance) => {
    res.send({ status: true, user: { userInstance } });
  }, (err) => {
    res.send({ status: false, message: err });
  });
});

admin.post('/SaveReminder', function (req, res) {

  var data = req.body;
  data.OwnerId = req.query.OwnerId;
  data._creator = req.query._creator;


  SaveReminder(data).then((userInstance) => {
    res.send({ status: true, user: { userInstance } });
  }, (err) => {
    res.send({ status: false, message: err });
  });
})

admin.post('/CreateSms', function (req, _res) {
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
          FindNotificationData(object)
            .then((result) => {
              if (result) {
                console.log('coming from test', result['Users']);
                let tokens = [];
                result['Users'].forEach((token) => {
                  tokens.push(token.token)
                })                
                var notification = {
                  "tokens": tokens,
                  "profile": "testprofile",
                  "notification": {
                    "title": "New Template added",
                    "message": "hi",
                    "android": {
                      "title": "New Template added",
                      "message": "new template added"//result["MessageId"].MessageName
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



admin.post('/UpdateSmsTemp', function (req, res) {
  var data = req.body;
  updateSmsTemplate(data)
  .then((userInstance) => {
    res.send({ status: true, user: { userInstance } });
  }, (err) => {
    res.send({ status: false, message: err });
  });
})