import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCampaign } from './add-campaign';

@NgModule({
  declarations: [
    AddCampaign,
  ],
  imports: [
    IonicPageModule.forChild(AddCampaign),
  ],
  exports: [
    AddCampaign
  ]
})
export class AddCampaignModule {}
