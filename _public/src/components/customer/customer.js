"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var add_customer_1 = require("./../add-customer/add-customer");
var view_customer_1 = require("./../view-customer/view-customer");
var Customer = (function () {
    function Customer(nav) {
        this.nav = nav;
        this.addCustomer = add_customer_1.AddCustomer;
        this.viewCustomer = view_customer_1.ViewCustomer;
        console.log('Hello Customer Component');
    }
    Customer.prototype.goToAddCustomer = function () {
        this.nav.push(add_customer_1.AddCustomer);
    };
    Customer.prototype.goToViewCustomer = function () {
        this.nav.push(view_customer_1.ViewCustomer);
    };
    return Customer;
}());
Customer = __decorate([
    core_1.Component({
        selector: 'customer',
        templateUrl: 'customer.html'
    })
], Customer);
exports.Customer = Customer;
