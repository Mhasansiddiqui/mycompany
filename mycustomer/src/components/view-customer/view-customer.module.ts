import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCustomer } from './view-customer';

@NgModule({
  declarations: [
    ViewCustomer,
  ],
  imports: [
    IonicPageModule.forChild(ViewCustomer),
  ],
  exports: [
    ViewCustomer
  ]
})
export class ViewCustomerModule {}
