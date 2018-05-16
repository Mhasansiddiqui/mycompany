import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Dashboard } from '../components/dashboard/dashboard'
import { Customer } from '../components/customer/customer'

import { CustomerList } from '../components/customer-list/customer-list'
import { Profile } from '../components/profile/profile'
import { ViewCustomer } from '../components/view-customer/view-customer'
import { AddCustomer } from '../components/add-customer/add-customer'
import { Settings } from '../components/settings/settings'
import { Notification } from '../components/notification/notification'
import { Login } from './../pages/login/login'
import { CreateUser } from '../components/create-user/create-user'
import { CreateBranch } from '../components/create-branch/create-branch'
import { BranchList } from '../components/branch-list/branch-list'

import { Sms } from '../components/sms/sms'
import { Campaign } from '../components/campaign/campaign'

import { AppService } from '../providers/app-service'

import { ConnectionBackend, HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { CustomHttp } from '../providers/custom-http'

import {RequestSms} from '../components/request-sms/request-sms'
import {AddCampaign} from '../components/add-campaign/add-campaign'
import {BranchStatus} from '../components/branch-status/branch-status'

import {Reminder} from '../components/reminder/reminder'
import {DetailCustomer} from '../components/detail-customer/detail-customer'

import {Tabs} from '../components/tabs/tabs'

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import {SmsTemplateStatus} from '../components/sms-template-status/sms-template-status';

import {SmsFilter} from '../pipes/sms-filter'

import { ProgressBar } from '../components/progress-bar/progress-bar';


const cloudSettings: CloudSettings = {
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Dashboard,
    Customer,
    Sms,
    CustomerList,
    ViewCustomer,
    Profile,
    Notification,
    AddCustomer,
    Login,
    Settings,
    CreateUser,
    CreateBranch,
    BranchList,
    Campaign,
    RequestSms,
    AddCampaign,
    BranchStatus,
    Reminder,
    Tabs,
    DetailCustomer,
    SmsTemplateStatus,
    ProgressBar,
    SmsFilter
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Dashboard,
    Customer,
    Sms,
    CustomerList,
    ViewCustomer,
    Settings,
    Notification,
    AddCustomer,
    Profile,
    Login,
    CreateUser,
    CreateBranch,
    BranchList,
    Campaign,
    RequestSms,
    AddCampaign,
    BranchStatus,
    Reminder,
    Tabs,
    DetailCustomer,
    SmsTemplateStatus,
    ProgressBar
    
  ], 
  providers: [
    StatusBar,
    SplashScreen,
    AppService,

    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ]
})
export class AppModule { }
export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new CustomHttp(backend, defaultOptions);
}
