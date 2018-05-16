import { Component, Input,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
import { CustomerList } from '../customer-list/customer-list'
import { Sms } from '../sms/sms'
import { Login } from './../../pages/login/login'
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html',
  inputs: ['userRole']
})
export class Dashboard implements OnInit {

  @Input() isAdmin;

  constructor(private navCtrl: NavController, private params: NavParams) {
    console.log('Hello Dashboard Component');

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
    this.navCtrl.push(Login);
  }

}
