import { Component, OnInit } from '@angular/core';
import { AppService } from '../../providers/app-service'

import {LoadingController} from 'ionic-angular'


@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class Profile implements OnInit {


  branch;
  constructor(private appService : AppService,
  public loadingCtrl: LoadingController
  ) {
    
  }
  ngOnInit(){
this.getCurrentProf();
  }
  getCurrentProf(){
            let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

    this.appService.getCurrentProf()
      .subscribe(res => { 

        if(res && res['status']){
        this.branch = res.user.success ;
          loading.dismiss();
        }
        else{
            loading.dismiss();
        }

    },(err)=>{
      loading.dismiss();
    });
  }

}
