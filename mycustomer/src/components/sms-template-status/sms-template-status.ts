import { Component , ChangeDetectorRef } from '@angular/core';


import { AppService } from '../../providers/app-service';

import {LoadingController} from 'ionic-angular'

@Component({
  selector: 'sms-template-status',
  templateUrl: 'sms-template-status.html'
})
export class SmsTemplateStatus {


  cucumber: string;

  constructor( private cd : ChangeDetectorRef,private AppService: AppService,
  public loadingCtrl: LoadingController) {
    
    this.getAllUserSmsTemplate()
  }
  allSms;
  getAllUserSmsTemplate() {

         let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

    this.AppService.getAllSMS()
      .subscribe((res) => {
        console.log(res);
        this.allSms = res.user.success;
         this.cd.detectChanges();
loading.dismiss();

      })
  }
  onChange(event,sms) {
    this.AppService.updateSmsTemplateStatus(sms._id,event.value)
    .subscribe(res => 
      this.getAllUserSmsTemplate()
     );
     
     
  }

}
