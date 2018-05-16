import { Component } from '@angular/core';

import { AppService } from '../../providers/app-service';

import {LoadingController} from 'ionic-angular'

@Component({
  selector: 'view-sms',
  templateUrl: 'view-sms.html'
})
export class ViewSms {

  constructor(private AppService: AppService,public loadingCtrl: LoadingController) {
    this.getAllUserSmsTemplate()
  }
  allSms;
  getAllUserSmsTemplate(){


         let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();


    this.AppService.getAllSMS()
      .subscribe( (res) => {
         
        this.allSms = res.user.success;
loading.dismiss();
        
      })
  }

}
