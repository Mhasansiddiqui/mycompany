import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Campaign } from './campaign';

@NgModule({
  declarations: [
    Campaign,
  ],
  imports: [
    IonicPageModule.forChild(Campaign),
  ],
  exports: [
    Campaign
  ]
})
export class CampaignModule {}
