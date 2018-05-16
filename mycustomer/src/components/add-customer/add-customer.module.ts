import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCustomer } from './add-customer';

@NgModule({
  declarations: [
    AddCustomer,
  ],
  imports: [
    IonicPageModule.forChild(AddCustomer),
  ],
  exports: [
    AddCustomer
  ]
})
export class AddCustomerModule {}
