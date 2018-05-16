import { Component, OnInit } from '@angular/core';
import { NavController, NavParams ,Platform} from 'ionic-angular';
import { Login } from './../login/login'
import { StatusBar, Splashscreen } from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isAdmin = false;


constructor(private navParam : NavParams ,  private navCtrl : NavController ,platform: Platform) {

     console.log( this.navParam.get('currentUser') );
      
/*
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
 
      this.push.register().then((t: PushToken) => {
        return this.push.saveToken(t);
      }).then((t: PushToken) => {
        console.log('Token saved:', t.token);
      });*/
 
/*      this.push.rx.notification()
      .subscribe((msg) => {
        console.log('I received awesome push: ' + msg);
      });*/
   // });
  }
  logout() {

    this.navCtrl.push(Login)
  }

}
