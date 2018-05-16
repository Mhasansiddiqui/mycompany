import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Sms } from './sms';

@NgModule({
  declarations: [
    Sms,
  ],
  imports: [
    IonicPageModule.forChild(Sms),
  ],
  exports: [
    Sms
  ]
})
export class SmsModule {}
