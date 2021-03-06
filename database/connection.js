/// <reference path="../typings/node/node.d.ts" />
"use strict";
var mongoose = require("mongoose");
//--- Database Connection Start --- //
function connectionToDb() {
    // let connection = 'mongodb://hasan:hasan@ds061385.mongolab.com:61385/sales-man';
    // let connection = 'mongodb://localhost:27017/mycompany';  
    ///mongodb://<dbuser>:<dbpassword>@ds011314.mlab.com:11314/mycompany
    var connection = 'mongodb://hasan:hasan@ds011314.mlab.com:11314/mycompany';
    mongoose.connect(connection);
    mongoose.connection.on('connected', function () {
        console.log('connected to mongoose');
    });
    //  mongoose.connection.on('disconnected', () => {
    //      console.log('disconnected to mongoose');
    //  })
    //  mongoose.connection.on('error', (err) => {
    //      console.log('error in connection' + err);
    //  })
    //      mongoose.connection.close(()=>{
    //      console.log('connection closing');
    //  })
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected through app termination');
            process.exit(0);
        });
    });
}
exports.connectionToDb = connectionToDb;
// ---- Database connection ended -----// 
