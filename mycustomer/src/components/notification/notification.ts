import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service'

@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})
export class Notification {


  messages ;
  constructor(private appServices:AppService) {
      this.getAllMessages();

  }
  getAllMessages(){
    this.appServices.getAllMessages()
      .subscribe(res => {console.log(res) ; this.messages = res.user.success});
  }

}
