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
        this.status = this.getLoginStatus();
    }
    AppService.prototype.ngOnInit = function () {
    };
    //=========================admin======================== https://mycompanys . herokuapp . com/
    AppService.prototype.CreateUser = function (email, password, roll) {
        return this.http.post('http://localhost:3000/admin/CreateUser', { Email: email, Password: password, isAdmin: roll })
            .map(function (r) { return r.json(); });
    };
    AppService.prototype.signIn = function (email, password) {
        var token = localStorage.getItem('token');
        return this.http.post('http://localhost:3000/authentication', { Email: email, Password: password, token: token })
            .map(function (res) { return res.json(); });
        /*, (error, res) => {
          console.log(error, res)
        })
          .map((res) => {
           
              res.json()
          })*/
    };
    AppService.prototype.getUsers = function () {
        return this.http.get('http://localhost:3000/admin/getUsers');
    };
    AppService.prototype.CreateBranch = function (BranchName, BranchOwner, ownerNumber, address, BusinessType, senderId, user, landline) {
        return this.http.post('http://localhost:3000/admin/CreateBranch', {
            BranchName: BranchName, BranchOwner: BranchOwner, MobileNo: ownerNumber, SenderID: senderId, BusinessType: BusinessType, Address: address, Landline: landline, UserID: user
        })
            .map(function (r) { return r.json(); });
    };
    AppService.prototype.getCurrentBranchList = function () {
        return this.http.get('http://localhost:3000/admin/getBranches');
    };
    AppService.prototype.createReminder = function (title, body, UsersId) {
        return this.http.post('http://localhost:3000/admin/SaveReminder', { UsersId: UsersId, title: title, body: body })
            .map(function (r) { return r.json(); });
    };
    //======================= user =========================
    AppService.prototype.CreateSMS = function (title, body) {
        return this.http
            .post('http://localhost:3000/' + this.status + '/CreateSms', { MessageName: title, MessasgeBody: body, Status: 'pendding' })
            .map(function (r) { return r.json(); });
    };
    AppService.prototype.getAllSMS = function () {
        return this.http.get('http://localhost:3000/' + this.status + '/GetAllSms');
        /*.map((res) => {
         console
         .log(res);
        })*/
    };
    AppService.prototype.getAllCustomers = function () {
        return this.http.get('http://localhost:3000/' + this.status + '/getCustomers');
        /*.map((res) => {
          if (res)
            res.json()
        })*/
    };
    AppService.prototype.createCustomer = function (sms, customer, name, phone, email) {
        return this.http.post('http://localhost:3000/' + this.status + '/CreateCustomer', { Sms: sms, customers: customer, CustomerName: name, MobileNo: phone, CustomerEmail: email })
            .map(function (r) { return r.json(); });
    };
    AppService.prototype.getAllMessages = function () {
        return this.http.get('http://localhost:3000/' + this.status + '/GetAllMessages');
    };
    AppService.prototype.getCurrentProf = function () {
        return this.http.get('http://localhost:3000/' + this.status + '/GetCurrProf');
    };
    AppService.prototype.SaveCampaign = function (campaignName, campaignText, campaign, customer) {
        return this.http.post('http://localhost:3000/' + this.status + '/SaveCampaign', { CampaignName: campaignName, CampaignText: campaignText, SelectedCampaign: campaign, customers: customer })
            .map(function (r) { return r.json(); });
    };
    AppService.prototype.getLoginStatus = function () {
        var s = (JSON.parse(localStorage.getItem('currentUser')));
        return s ? s['isAdmin'] ? "admin" : 'general' : "";
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable()
], AppService);
exports.AppService = AppService;
