import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'detail-customer',
  templateUrl: 'detail-customer.html'
})
export class DetailCustomer {

  customer;
  constructor(public navParams: NavParams) {
      this.customer = this.navParams.get("data")
  }

}
