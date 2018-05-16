import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsTemplateStatus } from './sms-template-status';

@NgModule({
  declarations: [
    SmsTemplateStatus,
  ],
  imports: [
    IonicPageModule.forChild(SmsTemplateStatus),
  ],
  exports: [
    SmsTemplateStatus
  ]
})
export class SmsTemplateStatusModule {}
