/// <reference path="./typings/node/node.d.ts" />

import express = require('express');
import bodyparser = require('body-parser');



import { connectionToDb } from './database/connection';
import { FindOneData,FindOneAndUpdateData } from './database/schema/user'



connectionToDb();

/*var firebase = require("firebase");
firebase.initializeApp({
  serviceAccount: "MyCustomers-37bb97570891.json",
  databaseURL: "https://project-4674450910656093602.firebaseio.com"
});*/

import { admin } from './routes/admin';
import { general } from './routes/general';

let app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


app.use(express.static('mycustomer/www/'));

app.use('/admin', admin);
app.use('/general', general);

app.post('/authentication', (req: express.Request, res: express.Response) => {
    let object = { Email :  req.body.Email , Password : req.body.Password }
    let token = {token : req.body.token }
    FindOneAndUpdateData(object,token).then((result) => {
        
        res.send(result)
    }, (result) => {
        console.log(result)
        res.send(result)
    })

})

app.use('/', (req: express.Request, res: express.Response, next: Function) => {

    next();
});
app.use('/', (err: any, req: express.Request, res: express.Response, next: Function) => {
    res.send({status : false});
    next();
});

app.set("port", (process.env.PORT || 3000));


app.listen(app.get("port"), function () {
    console.log('running server on 3000');
});
