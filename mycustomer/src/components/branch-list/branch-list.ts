import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service'

import {LoadingController} from 'ionic-angular'

@Component({
  selector: 'branch-list',
  templateUrl: 'branch-list.html'
})
export class BranchList {


  branches = [];
  constructor(private appService:AppService,
  public loadingCtrl: LoadingController
  ) {
      this.getCurrentBranchList();
  }
  getCurrentBranchList(){

         let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();



    this.appService.getCurrentBranchList()
        .subscribe(res => {
           this.branches = res.user.success; 
            loading.dismiss();
          });
  }

}
