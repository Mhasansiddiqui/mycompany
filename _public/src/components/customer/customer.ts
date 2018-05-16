import { Component  } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddCustomer} from './../add-customer/add-customer'
import {ViewCustomer} from './../view-customer/view-customer'
@Component({
  selector: 'customer',
  templateUrl: 'customer.html'
})
export class Customer {

  addCustomer  = AddCustomer;
  viewCustomer  = ViewCustomer;
  constructor(private nav : NavController) {
    console.log('Hello Customer Component');
    
  }
  goToAddCustomer(){
    this.nav.push(AddCustomer);

  }
  goToViewCustomer(){
    this.nav.push(ViewCustomer);
  }

}
