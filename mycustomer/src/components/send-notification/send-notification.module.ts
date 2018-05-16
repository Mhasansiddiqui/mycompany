import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendNotification } from './send-notification';

@NgModule({
  declarations: [
    SendNotification,
  ],
  imports: [
    IonicPageModule.forChild(SendNotification),
  ],
  exports: [
    SendNotification
  ]
})
export class SendNotificationModule {}
