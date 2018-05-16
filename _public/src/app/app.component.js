"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var dashboard_1 = require("../components/dashboard/dashboard");
var customer_1 = require("../components/customer/customer");
var sms_1 = require("../components/sms/sms");
var home_1 = require("../pages/home/home");
var profile_1 = require("../components/profile/profile");
var view_customer_1 = require("../components/view-customer/view-customer");
var settings_1 = require("../components/settings/settings");
var notification_1 = require("../components/notification/notification");
var create_user_1 = require("../components/create-user/create-user");
var create_branch_1 = require("../components/create-branch/create-branch");
var MyApp = (function () {
    function MyApp(push, platform, statusBar, splashScreen) {
        var _this = this;
        this.push = push;
        this.rootPage = home_1.HomePage;
        this.Dashboard = dashboard_1.Dashboard;
        this.Sms = sms_1.Sms;
        this.Profile = profile_1.Profile;
        this.Customer = customer_1.Customer;
        this.ViewCustomer = view_customer_1.ViewCustomer;
        this.Settings = settings_1.Settings;
        this.Notification = notification_1.Notification;
        platform.ready().then(function () {
            _this.push.register().then(function (t) {
                return _this.push.saveToken(t);
            }).then(function (t) {
                console.log('Token saved:', t.token);
            }).catch(function (err) { return console.log(err); });
            _this.push.rx.notification()
                .subscribe(function (msg) {
                alert(msg.title + ': ' + msg.text);
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.createUser = function () {
        this.nav.push(create_user_1.CreateUser);
    };
    MyApp.prototype.createBranch = function () {
        this.nav.push(create_branch_1.CreateBranch);
    };
    return MyApp;
}());
__decorate([
    core_1.ViewChild('root')
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    core_1.Component({
        templateUrl: 'app.html'
    })
], MyApp);
exports.MyApp = MyApp;
