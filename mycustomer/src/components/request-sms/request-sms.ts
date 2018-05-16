import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service';
import { NavController ,LoadingController} from 'ionic-angular';


@Component({
  selector: 'request-sms',
  templateUrl: 'request-sms.html'
})
export class RequestSms {

 
  constructor(private appService: AppService,public loadingCtrl: LoadingController) {
    console.log('Hello Sms Component');

  }
  ngOnInit() {
    this.getAllSms();
  }

  createSMS(title, body) {
    this.appService.CreateSMS(title, body)
    .subscribe(res => {
      console.log(res);
    })
  }

  getAllSms() {

         let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();


    this.appService.getAllSMS()
      .subscribe(res =>{
       loading.dismiss();
      }  );
  }

}
