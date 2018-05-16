import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddCampaign} from '../../components/add-campaign/add-campaign'
@Component({
  selector: 'campaign',
  templateUrl: 'campaign.html'
})
export class Campaign {

  
  constructor(private nav :NavController) {
    
  }


  goToAddCampaign(){
    this.nav.push(AddCampaign)
  }

}
