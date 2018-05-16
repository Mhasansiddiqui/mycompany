"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var CustomHttp = (function (_super) {
    __extends(CustomHttp, _super);
    function CustomHttp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /*  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        console.log('request...');
        return super.request(url, options)
          .map(res => res.json())
          .catch(res => {
            return Observable.throw(res.json());
          });
    
      }*/
    CustomHttp.prototype.get = function (url, options) {
        var cUser = localStorage.getItem('currentUser');
        if (cUser) {
            var pCUser = JSON.parse(cUser);
            if (pCUser['_id'] && pCUser['OwnerId'])
                url = url + "?OwnerId=" + pCUser['OwnerId'] + '&_creator=' + pCUser['_id'];
            else if (pCUser['_id']) {
                url = url + "?OwnerId=" + pCUser['_id'] + '&_creator=' + pCUser['_id'];
            }
        }
        return _super.prototype.get.call(this, url, options)
            .map(function (res) { return res.json(); })
            .catch(function (res) {
            return rxjs_1.Observable.throw(res.json());
        });
    };
    CustomHttp.prototype.post = function (url, body, options) {
        var cUser = localStorage.getItem('currentUser');
        if (cUser) {
            var pCUser = JSON.parse(cUser);
            if (pCUser['_id'] && pCUser['OwnerId'])
                url = url + "?OwnerId=" + pCUser['OwnerId'] + '&_creator=' + pCUser['_id'];
            else if (pCUser['_id']) {
                url = url + "?OwnerId=" + pCUser['_id'] + '&_creator=' + pCUser['_id'];
            }
        }
        var request = _super.prototype.post.call(this, url, body);
        return request;
    };
    return CustomHttp;
}(http_1.Http));
CustomHttp = __decorate([
    core_1.Injectable()
], CustomHttp);
exports.CustomHttp = CustomHttp;
