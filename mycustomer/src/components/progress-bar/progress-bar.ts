import { Component,Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBar {

  @Input('progress') progress;

  constructor() {
    console.log('Hello ProgressBar Component');
    
  }

}
