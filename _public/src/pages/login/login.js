"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var home_1 = require("../home/home");
var Login = (function () {
    function Login(appService, navCtrl, navParams) {
        this.appService = appService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.customer = function (data) {
        this.navCtrl.push(home_1.HomePage, { data: data, isAdmin: false });
    };
    Login.prototype.admin = function (data) {
        this.navCtrl.push(home_1.HomePage, { data: data, isAdmin: true });
    };
    Login.prototype.signIn = function (email, password) {
        var _this = this;
        this.appService.signIn(email.value, password.value)
            .subscribe(function (res) {
            console.log(res);
            if (res) {
                if (res.isAdmin) {
                    _this.admin(res);
                }
                else {
                    _this.customer(res);
                }
            }
        });
    };
    return Login;
}());
Login = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    })
], Login);
exports.Login = Login;
