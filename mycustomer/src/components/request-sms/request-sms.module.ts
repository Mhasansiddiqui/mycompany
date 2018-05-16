import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestSms } from './request-sms';

@NgModule({
  declarations: [
    RequestSms,
  ],
  imports: [
    IonicPageModule.forChild(RequestSms),
  ],
  exports: [
    RequestSms
  ]
})
export class RequestSmsModule {}
