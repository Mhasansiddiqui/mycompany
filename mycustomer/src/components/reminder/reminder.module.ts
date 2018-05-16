import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Reminder } from './reminder';

@NgModule({
  declarations: [
    Reminder,
  ],
  imports: [
    IonicPageModule.forChild(Reminder),
  ],
  exports: [
    Reminder
  ]
})
export class ReminderModule {}
