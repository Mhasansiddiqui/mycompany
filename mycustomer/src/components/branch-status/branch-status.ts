import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service'

import {LoadingController} from 'ionic-angular'

@Component({
  selector: 'branch-status',
  templateUrl: 'branch-status.html'
})
export class BranchStatus {


  branches ;
  constructor(private appService : AppService,
  public loadingCtrl: LoadingController) {
    this.getAllBranchStatus();
  }
  getAllBranchStatus(){


         let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();


    this.appService.getCurrentBranchList()
      .subscribe(res => { this.branches = res.user.success; loading.dismiss();})
  }

}
