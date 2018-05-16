import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Dashboard } from '../components/dashboard/dashboard'
import { Customer } from '../components/customer/customer'
import { Sms } from '../components/sms/sms'
import { CustomerList } from '../components/customer-list/customer-list'
import { Profile } from '../components/profile/profile'
import { ViewCustomer } from '../components/view-customer/view-customer'
import { AddCustomer } from '../components/add-customer/add-customer'
import { Settings } from '../components/settings/settings'
import { Notification } from '../components/notification/notification'
import { Login } from './../pages/login/login'
import { CreateUser } from '../components/create-user/create-user'
import { CreateBranch } from '../components/create-branch/create-branch'

import { AppService } from '../providers/app-service'

import { ConnectionBackend, HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { CustomHttp } from '../providers/custom-http'

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';



const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'b3f80ecb'
  },
  /*'insights': {
    'enabled': false
  },*/
  'push': {
    'sender_id': '177014203631',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#ff0000'
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
    CreateBranch
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
    CreateBranch
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
