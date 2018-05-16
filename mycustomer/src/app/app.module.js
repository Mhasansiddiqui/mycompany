"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var splash_screen_1 = require("@ionic-native/splash-screen");
var status_bar_1 = require("@ionic-native/status-bar");
var app_component_1 = require("./app.component");
var home_1 = require("../pages/home/home");
var dashboard_1 = require("../components/dashboard/dashboard");
var customer_1 = require("../components/customer/customer");
var customer_list_1 = require("../components/customer-list/customer-list");
var profile_1 = require("../components/profile/profile");
var view_customer_1 = require("../components/view-customer/view-customer");
var add_customer_1 = require("../components/add-customer/add-customer");
var settings_1 = require("../components/settings/settings");
var notification_1 = require("../components/notification/notification");
var login_1 = require("./../pages/login/login");
var create_user_1 = require("../components/create-user/create-user");
var create_branch_1 = require("../components/create-branch/create-branch");
var branch_list_1 = require("../components/branch-list/branch-list");
var sms_1 = require("../components/sms/sms");
var campaign_1 = require("../components/campaign/campaign");
var app_service_1 = require("../providers/app-service");
var http_1 = require("@angular/http");
var custom_http_1 = require("../providers/custom-http");
var request_sms_1 = require("../components/request-sms/request-sms");
var add_campaign_1 = require("../components/add-campaign/add-campaign");
var branch_status_1 = require("../components/branch-status/branch-status");
var reminder_1 = require("../components/reminder/reminder");
var tabs_1 = require("../components/tabs/tabs");
var cloud_angular_1 = require("@ionic/cloud-angular");
var cloudSettings = {
    'core': {
        'app_id': '0a715409'
    },
    'push': {
        'sender_id': '1018555476772',
        'pluginConfig': {
            'ios': {
                'badge': true,
                'sound': true
            },
            'android': {
                'iconColor': '#343434'
            }
        }
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.MyApp,
            home_1.HomePage,
            dashboard_1.Dashboard,
            customer_1.Customer,
            sms_1.Sms,
            customer_list_1.CustomerList,
            view_customer_1.ViewCustomer,
            profile_1.Profile,
            notification_1.Notification,
            add_customer_1.AddCustomer,
            login_1.Login,
            settings_1.Settings,
            create_user_1.CreateUser,
            create_branch_1.CreateBranch,
            branch_list_1.BranchList,
            campaign_1.Campaign,
            request_sms_1.RequestSms,
            add_campaign_1.AddCampaign,
            branch_status_1.BranchStatus,
            reminder_1.Reminder,
            tabs_1.Tabs
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp),
            cloud_angular_1.CloudModule.forRoot(cloudSettings)
        ],
        bootstrap: [ionic_angular_1.IonicApp],
        entryComponents: [
            app_component_1.MyApp,
            home_1.HomePage,
            dashboard_1.Dashboard,
            customer_1.Customer,
            sms_1.Sms,
            customer_list_1.CustomerList,
            view_customer_1.ViewCustomer,
            settings_1.Settings,
            notification_1.Notification,
            add_customer_1.AddCustomer,
            profile_1.Profile,
            login_1.Login,
            create_user_1.CreateUser,
            create_branch_1.CreateBranch,
            branch_list_1.BranchList,
            campaign_1.Campaign,
            request_sms_1.RequestSms,
            add_campaign_1.AddCampaign,
            branch_status_1.BranchStatus,
            reminder_1.Reminder,
            tabs_1.Tabs
        ],
        providers: [
            status_bar_1.StatusBar,
            splash_screen_1.SplashScreen,
            app_service_1.AppService,
            { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler },
            {
                provide: http_1.Http,
                useFactory: httpFactory,
                deps: [http_1.XHRBackend, http_1.RequestOptions]
            }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
function httpFactory(backend, defaultOptions) {
    return new custom_http_1.CustomHttp(backend, defaultOptions);
}
exports.httpFactory = httpFactory;
