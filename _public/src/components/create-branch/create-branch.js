"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CreateBranch = (function () {
    function CreateBranch(appService) {
        this.appService = appService;
        this.getAllUser();
    }
    CreateBranch.prototype.createBranch = function (branchName, ownerName, ownerNumber, address, branchType, senderId, user, Landline) {
        this.appService.CreateBranch(branchName, ownerName, ownerNumber, address, branchType, senderId, user, Landline)
            .subscribe(function (res) { return console.log(res); });
    };
    CreateBranch.prototype.getAllUser = function () {
        var _this = this;
        this.appService.getUsers()
            .subscribe(function (res) {
            if (res) {
                _this.allUsers = res.user.success;
            }
        });
    };
    return CreateBranch;
}());
CreateBranch = __decorate([
    core_1.Component({
        selector: 'create-branch',
        templateUrl: 'create-branch.html'
    })
], CreateBranch);
exports.CreateBranch = CreateBranch;
