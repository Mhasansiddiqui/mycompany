"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var dashboard_1 = require("../dashboard/dashboard");
var customer_1 = require("../customer/customer");
var sms_1 = require("../sms/sms");
//import { HomePage } from '../pages/home/home';
var profile_1 = require("../profile/profile");
var view_customer_1 = require("../view-customer/view-customer");
var settings_1 = require("../settings/settings");
var notification_1 = require("../notification/notification");
var campaign_1 = require("../campaign/campaign");
//import { Login } from '../pages/login/login'
var Tabs = (function () {
    function Tabs(nav) {
        this.nav = nav;
        // @ViewChild('root') nav: NavController;  
        this.rootPage = dashboard_1.Dashboard;
        this.Customer = customer_1.Customer;
        this.Campaign = campaign_1.Campaign;
        this.Sms = sms_1.Sms;
        this.Profile = profile_1.Profile;
        this.ViewCustomer = view_customer_1.ViewCustomer;
        this.Settings = settings_1.Settings;
        this.Notification = notification_1.Notification;
        console.log('Hello Tabs Component');
        console.log(this.nav.getViews());
    }
    return Tabs;
}());
Tabs = __decorate([
    core_1.Component({
        selector: 'tabs',
        templateUrl: 'tabs.html'
    })
], Tabs);
exports.Tabs = Tabs;
