import { Component } from '@angular/core';

import { AppService } from '../../providers/app-service';

import { ToastController } from 'ionic-angular';


@Component({
  selector: 'add-campaign',
  templateUrl: 'add-campaign.html'
})
export class AddCampaign {

  
  constructor(private toastCtrl: ToastController,private appService:AppService) {
    
  }

  createCampaign(campaignName,campaignText,campaign,customer){
      this.appService.SaveCampaign(campaignName,campaignText,campaign,customer)
        .subscribe(res => console.log(res) )
  }


  SaveToast() {
    let toast = this.toastCtrl.create({
      message: 'Campaign added successfully',
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
      message: 'Campaign Not Saved',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }



}
