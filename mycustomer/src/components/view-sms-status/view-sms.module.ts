import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewSms } from './view-sms';

import {SmsFilter} from '../../pipes/sms-filter'

@NgModule({
  declarations: [
    ViewSms,
    SmsFilter
  ],
  imports: [
    IonicPageModule.forChild(ViewSms),
  ],
  exports: [
    ViewSms
  ]
})
export class ViewSmsModule {}
