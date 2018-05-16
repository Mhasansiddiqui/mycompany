import { Component } from '@angular/core';

/**
 * Generated class for the UserStatus component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'user-status',
  templateUrl: 'user-status.html'
})
export class UserStatus {

  text: string;

  constructor() {
    console.log('Hello UserStatus Component');
    this.text = 'Hello World';
  }

}
