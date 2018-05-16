import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserStatus } from './user-status';

@NgModule({
  declarations: [
    UserStatus,
  ],
  imports: [
    IonicPageModule.forChild(UserStatus),
  ],
  exports: [
    UserStatus
  ]
})
export class UserStatusModule {}
