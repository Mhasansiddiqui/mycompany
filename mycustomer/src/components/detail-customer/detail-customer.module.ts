import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailCustomer } from './detail-customer';

@NgModule({
  declarations: [
    DetailCustomer,
  ],
  imports: [
    IonicPageModule.forChild(DetailCustomer),
  ],
  exports: [
    DetailCustomer
  ]
})
export class DetailCustomerModule {}
