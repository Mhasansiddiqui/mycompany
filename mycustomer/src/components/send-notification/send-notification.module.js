"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var send_notification_1 = require("./send-notification");
var SendNotificationModule = (function () {
    function SendNotificationModule() {
    }
    return SendNotificationModule;
}());
SendNotificationModule = __decorate([
    core_1.NgModule({
        declarations: [
            send_notification_1.SendNotification,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(send_notification_1.SendNotification),
        ],
        exports: [
            send_notification_1.SendNotification
        ]
    })
], SendNotificationModule);
exports.SendNotificationModule = SendNotificationModule;
