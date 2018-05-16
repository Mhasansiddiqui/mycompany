import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerList } from './customer-list';

@NgModule({
  declarations: [
    CustomerList,
  ],
  imports: [
    IonicPageModule.forChild(CustomerList),
  ],
  exports: [
    CustomerList
  ]
})
export class CustomerListModule {}
