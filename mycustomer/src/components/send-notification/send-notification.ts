import { Component } from '@angular/core';

/**
 * Generated class for the SendNotification component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'send-notification',
  templateUrl: 'send-notification.html'
})
export class SendNotification {

  text: string;

  constructor() {
    console.log('Hello SendNotification Component');
    this.text = 'Hello World';
  }

}
