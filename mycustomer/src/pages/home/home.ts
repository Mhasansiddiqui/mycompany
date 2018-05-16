import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Login } from './../login/login'
import { StatusBar, Splashscreen } from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  isAdmin = false;


  constructor(private navParam: NavParams, private navCtrl: NavController, platform: Platform) {

  }

  ngOnInit() {
    if (this.navParam.get('data')) {
      this.isAdmin = this.navParam.get('data').isAdmin;
      localStorage.setItem('currentUser', JSON.stringify(this.navParam.get('data')))
    }
  }


  logout() {
    localStorage.clear();
    this.navCtrl.push(Login)
  }

}
