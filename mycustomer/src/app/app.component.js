"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var sms_1 = require("../components/sms/sms");
var create_user_1 = require("../components/create-user/create-user");
var create_branch_1 = require("../components/create-branch/create-branch");
var branch_list_1 = require("../components/branch-list/branch-list");
var campaign_1 = require("../components/campaign/campaign");
var branch_status_1 = require("../components/branch-status/branch-status");
var reminder_1 = require("../components/reminder/reminder");
var login_1 = require("../pages/login/login");
var MyApp = (function () {
    function MyApp(push, platform, statusBar, splashScreen) {
        var _this = this;
        this.push = push;
        this.rootPage = login_1.Login;
        this.BranchList = branch_list_1.BranchList;
        this.BranchStatus = branch_status_1.BranchStatus;
        this.Reminder = reminder_1.Reminder;
        this.count = 0;
        platform.ready().then(function () {
            _this.push.rx.notification()
                .subscribe(function (msg) {
                console.log(msg);
                _this.count++;
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.clearNotification = function () {
        this.count = 0;
    };
    MyApp.prototype.createUser = function () {
        this.nav.push(create_user_1.CreateUser);
    };
    MyApp.prototype.createBranch = function () {
        this.nav.push(create_branch_1.CreateBranch);
    };
    MyApp.prototype.branchList = function () {
        this.nav.push(branch_list_1.BranchList);
    };
    MyApp.prototype.SMS = function () {
        this.nav.push(sms_1.Sms);
    };
    MyApp.prototype.campaign = function () {
        this.nav.push(campaign_1.Campaign);
    };
    MyApp.prototype.checkBranchStatus = function () {
        this.nav.push(branch_status_1.BranchStatus);
    };
    MyApp.prototype.Createreminder = function () {
        this.nav.push(reminder_1.Reminder);
    };
    return MyApp;
}());
__decorate([
    core_1.ViewChild('root')
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    core_1.Component({
        templateUrl: 'app.html',
    })
], MyApp);
exports.MyApp = MyApp;
