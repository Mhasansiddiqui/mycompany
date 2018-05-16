import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';


import { Dashboard } from '../dashboard/dashboard'
import { Customer } from '../customer/customer'
import { Sms } from '../sms/sms'
//import { HomePage } from '../pages/home/home';
import { Profile } from '../profile/profile'
import { ViewCustomer } from '../view-customer/view-customer'
import { Settings } from '../settings/settings'
import { Notification } from '../notification/notification'

import { CreateUser } from '../create-user/create-user'
import { CreateBranch } from '../create-branch/create-branch'
import { BranchList } from '../branch-list/branch-list'

import { Campaign } from '../campaign/campaign'
import { BranchStatus } from '../branch-status/branch-status'
import { Reminder } from '../reminder/reminder'

//import { Login } from '../pages/login/login'


@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class Tabs {


 // @ViewChild('root') nav: NavController;  
  
  
  rootPage: any = Dashboard;
  Customer: any = Customer;
  Campaign: any = Campaign;
  Sms: any = Sms;
  Profile: any = Profile;  
  ViewCustomer: any = ViewCustomer;
  Settings: any = Settings;
  Notification: any = Notification;

  isAdmin;


  constructor(private nav : NavController) {
   this.isAdmin =  this.getLoginStatus();
   console.log(this.isAdmin)
  }
  getLoginStatus() : String {    
    let s = (JSON.parse(localStorage.getItem('currentUser'))) ;
    return s['isAdmin'] 
  }

}
