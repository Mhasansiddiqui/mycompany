import { Component, Input,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { CustomerList } from '../customer-list/customer-list'
import { Sms } from '../sms/sms'
import { Login } from './../../pages/login/login'
import { Tabs } from '../tabs/tabs'
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
  inputs: ['userRole']
})
export class Dashboard implements OnInit {

  isAdmin;

  constructor(private navCtrl: NavController, private params: NavParams) {
       let i = JSON.parse( localStorage.getItem('currentUser'))
       if(i){
          this.isAdmin = i.isAdmin;
       }
  }

  ngOnInit(){
   
  }


  addCustomer() {
    this.navCtrl.push(CustomerList);
  }
  createSms() {
    this.navCtrl.push(Sms);
  }
  logout() {
    localStorage.clear();
   this.navCtrl.setRoot(Login);
  }

}
