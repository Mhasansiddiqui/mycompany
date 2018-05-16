import { Component, OnInit } from '@angular/core';
import { AppService } from '../../providers/app-service'
/**
 * Generated class for the Sms component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'sms',
  templateUrl: 'sms.html'
})
export class Sms implements OnInit {



  constructor(private appService: AppService) {
    console.log('Hello Sms Component');

  }
  ngOnInit() {
    this.getAllSms();
  }

  createSMS(title, body) {
    this.appService.CreateSMS(title, body)
      .subscribe(res => console.log(res));
  }

  getAllSms() {
    this.appService.getAllSMS()
      .subscribe(res => console.log(res));
  }

}
