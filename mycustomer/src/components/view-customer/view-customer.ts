import { Component  } from '@angular/core';
import { NavController ,LoadingController } from 'ionic-angular';
import { AppService } from '../../providers/app-service'

import {DetailCustomer} from './../detail-customer/detail-customer'

@Component({
  selector: 'view-customer',
  templateUrl: 'view-customer.html'
})
export class ViewCustomer {

  customers
  constructor(public navCtrl: NavController,private appService:AppService,public loadingCtrl: LoadingController) {
    this.getAllBranchUser();
  }
  getAllBranchUser(){


         let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();


      this.appService.getAllCustomers().
        subscribe(res =>
        {
           this.customers = res.user.success 
             loading.dismiss();
        });
  }
  goToViewCustomer(data){
    this.navCtrl.push(DetailCustomer, {data : data });
    
  }


}
