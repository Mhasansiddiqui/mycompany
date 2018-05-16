import { Component } from '@angular/core';

/**
 * Generated class for the Settings component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class Settings {

  text: string;

  constructor() {
    console.log('Hello Settings Component');
    this.text = 'Hello World';
  }

}
