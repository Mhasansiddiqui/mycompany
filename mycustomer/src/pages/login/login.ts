import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { AppService } from '../../providers/app-service'

import { HomePage } from '../home/home'
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class Login implements OnInit {

  constructor(
    public push: Push,
    private appService: AppService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
  ) {

  }
  ngOnInit() {


    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t);
    }).then((t: PushToken) => {
      localStorage.setItem('token', t.token)
      console.log('Token saved:', t.token);
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  customer(data) {
    this.navCtrl.push(HomePage, { data: data, isAdmin: false })
  }
  admin(data) {
    this.navCtrl.push(HomePage, { data: data, isAdmin: true })
  }
  signIn(email, password) {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();


    this.appService
      .signIn(email.value, password.value)
      .subscribe((res) => {
        if (res) {
          
          if (res.isAdmin) {

            this.admin(res);
            loading.dismiss();

          }
          else {
            this.customer(res);
            loading.dismiss();
          }

        }
        else {
          loading.dismiss();
        }
      },(err)=>{
         loading.dismiss();
      })
  }


}
