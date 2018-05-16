"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RequestSms = (function () {
    function RequestSms(appService) {
        this.appService = appService;
        console.log('Hello Sms Component');
    }
    RequestSms.prototype.ngOnInit = function () {
        this.getAllSms();
    };
    RequestSms.prototype.createSMS = function (title, body) {
        this.appService.CreateSMS(title, body)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    RequestSms.prototype.getAllSms = function () {
        this.appService.getAllSMS()
            .subscribe(function (res) { return console.log(res); });
    };
    return RequestSms;
}());
RequestSms = __decorate([
    core_1.Component({
        selector: 'request-sms',
        templateUrl: 'request-sms.html'
    })
], RequestSms);
exports.RequestSms = RequestSms;
