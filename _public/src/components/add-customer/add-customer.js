"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
/**
 * Generated class for the AddCustomer component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var AddCustomer = (function () {
    function AddCustomer(appService) {
        this.appService = appService;
        console.log('Hello AddCustomer Component');
        this.getAllSmsTemplate();
        this.getAllCustomers();
    }
    AddCustomer.prototype.getAllSmsTemplate = function () {
        var _this = this;
        this.appService.getAllSMS()
            .subscribe(function (res) {
            if (res) {
                _this.allSms = res.user.success;
            }
        });
    };
    AddCustomer.prototype.getAllCustomers = function () {
        var _this = this;
        this.appService.getAllCustomers()
            .subscribe(function (res) {
            if (res) {
                _this.allCustomers = res.user.success;
            }
        });
    };
    AddCustomer.prototype.addCustomer = function (sms, customer, name, phone, email) {
        this.appService.createCustomer(sms, customer, name, phone, email)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    return AddCustomer;
}());
AddCustomer = __decorate([
    core_1.Component({
        selector: 'add-customer',
        templateUrl: 'add-customer.html'
    })
], AddCustomer);
exports.AddCustomer = AddCustomer;
