"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var customer_list_1 = require("../customer-list/customer-list");
var sms_1 = require("../sms/sms");
var login_1 = require("./../../pages/login/login");
var Dashboard = (function () {
    function Dashboard(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        console.log('Hello Dashboard Component');
    }
    Dashboard.prototype.ngOnInit = function () {
    };
    Dashboard.prototype.addCustomer = function () {
        this.navCtrl.push(customer_list_1.CustomerList);
    };
    Dashboard.prototype.createSms = function () {
        this.navCtrl.push(sms_1.Sms);
    };
    Dashboard.prototype.logout = function () {
        this.navCtrl.push(login_1.Login);
    };
    return Dashboard;
}());
__decorate([
    core_1.Input()
], Dashboard.prototype, "isAdmin", void 0);
Dashboard = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: 'dashboard.html',
        inputs: ['userRole']
    })
], Dashboard);
exports.Dashboard = Dashboard;
