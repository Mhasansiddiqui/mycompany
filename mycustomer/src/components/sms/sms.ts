import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RequestSms} from './../request-sms/request-sms'
import {SmsTemplateStatus} from './../sms-template-status/sms-template-status'

@Component({
  selector: 'sms',
  templateUrl: 'sms.html'
})
export class Sms  {


  constructor(private nav : NavController) {

  }
  goToRequestSms(){
    this.nav.push(RequestSms);
  }
  goToViewSms(){
    this.nav.push(SmsTemplateStatus)
  }

}
