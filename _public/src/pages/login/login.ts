import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppService } from '../../providers/app-service'

import { HomePage } from '../home/home'
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class Login {

  constructor(private appService: AppService, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  customer(data) {
    this.navCtrl.push(HomePage, { data: data , isAdmin : false })
  }
  admin(data) {
    this.navCtrl.push(HomePage, {data : data , isAdmin : true})
  }
  signIn(email, password) {
   
    this.appService.signIn(email.value, password.value)
      .subscribe((res) => {
        console.log(res);
        if (res) {
          if (res.isAdmin) {
            this.admin(res);
          }
          else {
            this.customer(res);            
          }
        }
      })
  }


}
