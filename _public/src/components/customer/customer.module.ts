import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Customer } from './customer';
import {AddCustomer} from './../add-customer/add-customer'
import {ViewCustomer} from './../view-customer/view-customer'

@NgModule({
  declarations: [
    Customer,
  
  ],
  imports: [
    IonicPageModule.forChild(Customer),
  ],
  exports: [
    Customer
  ]
})
export class CustomerModule {}
