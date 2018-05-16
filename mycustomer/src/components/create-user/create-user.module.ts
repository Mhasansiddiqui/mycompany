import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateUser } from './create-user';

@NgModule({
  declarations: [
    CreateUser,
  ],
  imports: [
    IonicPageModule.forChild(CreateUser),
  ],
  exports: [
    CreateUser
  ]
})
export class CreateUserModule {}
