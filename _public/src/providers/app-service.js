"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        console.log('Hello AppService Provider');
    }
    //=========================admin========================
    AppService.prototype.CreateUser = function (email, password, roll) {
        return this.http.post('api/admin/CreateUser', { Email: email, Password: password, isAdmin: roll })
            .map(function (res) {
            if (res)
                res.json();
        });
    };
    AppService.prototype.signIn = function (email, password) {
        return this.http.post('api/authentication', { Email: email, Password: password })
            .map(function (res) { return res.json(); });
        /*, (error, res) => {
          console.log(error, res)
        })
          .map((res) => {
           
              res.json()
          })*/
    };
    AppService.prototype.getUsers = function () {
        return this.http.get('api/admin/getUsers');
    };
    AppService.prototype.CreateBranch = function (BranchName, BranchOwner, ownerNumber, address, BusinessType, senderId, user, landline) {
        return this.http.post('api/admin/CreateBranch', { BranchName: BranchName, BranchOwner: BranchOwner, MobileNo: ownerNumber, SenderID: senderId, BusinessType: BusinessType, Address: address, Landline: landline, UserID: user
        })
            .map(function (res) {
            if (res)
                res.json();
        });
    };
    //======================= user =========================
    AppService.prototype.CreateSMS = function (title, body) {
        return this.http.post('api/general/CreateSms', { MessageName: title, MessasgeBody: body, Status: 'pendding' })
            .map(function (res) {
            if (res)
                res.json();
        });
    };
    AppService.prototype.getAllSMS = function () {
        return this.http.get('api/general/GetAllSms');
        /*.map((res) => {
         console
         .log(res);
        })*/
    };
    AppService.prototype.getAllCustomers = function () {
        return this.http.get('api/general/getUsers');
        /*.map((res) => {
          if (res)
            res.json()
        })*/
    };
    AppService.prototype.createCustomer = function (sms, customer, name, phone, email) {
        console.log(customer);
        return this.http.post('api/general/CreateCustomer', { Sms: sms, customers: customer, CustomerName: name, MobileNo: phone, CustomerEmail: email })
            .map(function (res) {
            if (res)
                res.json();
        });
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable()
], AppService);
exports.AppService = AppService;
