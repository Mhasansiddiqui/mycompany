import { Component } from '@angular/core';

/**
 * Generated class for the Notification component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})
export class Notification {

  text: string;

  constructor() {
    console.log('Hello Notification Component');
    this.text = 'Hello World';
  }

}
