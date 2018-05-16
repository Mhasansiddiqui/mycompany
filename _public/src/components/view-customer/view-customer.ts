import { Component } from '@angular/core';

/**
 * Generated class for the ViewCustomer component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'view-customer',
  templateUrl: 'view-customer.html'
})
export class ViewCustomer {

  text: string;

  constructor() {
    console.log('Hello ViewCustomer Component');
    this.text = 'Hello World';
  }

}
