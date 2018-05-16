import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'add-customer',
  templateUrl: 'add-customer.html'
})
export class AddCustomer {


  allSms;
  allCustomers;
  constructor(private toastCtrl: ToastController, private appService: AppService) {
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
        if (res && res['status']) {
          this.SaveToast();
        }
        else {
          this.RejectToast();
        }
      })
  }


  SaveToast() {
    let toast = this.toastCtrl.create({
      message: 'Customer added successfully',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  RejectToast() {
    let toast = this.toastCtrl.create({
      message: 'Customer Not Saved',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }



}
