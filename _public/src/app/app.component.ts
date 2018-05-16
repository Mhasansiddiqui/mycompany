import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';


import { Dashboard } from '../components/dashboard/dashboard'
import { Customer } from '../components/customer/customer'
import { Sms } from '../components/sms/sms'
import { HomePage } from '../pages/home/home';
import { Profile } from '../components/profile/profile'
import { ViewCustomer } from '../components/view-customer/view-customer'
import { Settings } from '../components/settings/settings'
import { Notification } from '../components/notification/notification'

import { CreateUser } from '../components/create-user/create-user'
import { CreateBranch } from '../components/create-branch/create-branch'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('root') nav: NavController
  rootPage: any = HomePage;
  Dashboard: any = Dashboard;

  Sms: any = Sms;
  Profile: any = Profile;

  Customer: any = Customer;
  ViewCustomer: any = ViewCustomer;

  Settings: any = Settings;
  Notification: any = Notification;


  constructor(public push: Push, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      this.push.register().then((t: PushToken) => {
        return this.push.saveToken(t);
      }).then((t: PushToken) => {
        console.log('Token saved:', t.token);
      }).catch((err)=> console.log(err))
      this.push.rx.notification()
        .subscribe((msg) => {
          alert(msg.title + ': ' + msg.text);
        });

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  createUser() {
    this.nav.push(CreateUser);
  }
  createBranch() {
    this.nav.push(CreateBranch);
  }
}

