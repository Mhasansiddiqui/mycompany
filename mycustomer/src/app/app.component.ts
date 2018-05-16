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
import { BranchList } from '../components/branch-list/branch-list'

import { Campaign } from '../components/campaign/campaign'
import { BranchStatus } from '../components/branch-status/branch-status'
import { Reminder } from '../components/reminder/reminder'

import { Login } from '../pages/login/login'

@Component({
  templateUrl: 'app.html',

})
export class MyApp {


  @ViewChild('root') nav: NavController;  
  rPage: any = Login

  BranchList: any = BranchList;
  BranchStatus: any = BranchStatus;
  Reminder: any = Reminder;

  count: any = 0;

  logout;
  isLogin;

  constructor(public push: Push, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      this.push.rx.notification()
        .subscribe((msg) => {
          console.log(msg);
          this.count++;
        });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  clearNotification() {
    this.count = 0;
  }
  createUser() {
    this.nav.push(CreateUser);
  }
  createBranch() {
    this.nav.push(CreateBranch);
  }
  branchList() {
    this.nav.push(BranchList);
  }

  SMS() {
    this.nav.push(Sms);
  }

  campaign() {
    this.nav.push(Campaign);
  }
  checkBranchStatus() {

    this.nav.push(BranchStatus)
  }
  Createreminder() {

    this.nav.push(Reminder)
  }
}

