import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service'
/**
 * Generated class for the AddCustomer component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'add-customer',
  templateUrl: 'add-customer.html'
})
export class AddCustomer {


  allSms;
  allCustomers;
  constructor(private appService: AppService) {
    console.log('Hello AddCustomer Component');
    this.getAllSmsTemplate();
    this.getAllCustomers();
  }
  getAllSmsTemplate() {
    this.appService.getAllSMS()
      .subscribe((res) => {
        if (res) {
          this.allSms = res.user.success;
        }
      })
  }
  getAllCustomers() {
    this.appService.getAllCustomers()
      .subscribe((res) => {
        if (res) {
          this.allCustomers = res.user.success;
        }
      })
  }
  addCustomer(sms, customer, name, phone, email) {

    this.appService.createCustomer(sms, customer, name, phone, email)
      .subscribe(res => {
        console.log(res);
      })
  }


}
