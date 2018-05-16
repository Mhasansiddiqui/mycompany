import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service'
@Component({
  selector: 'create-user',
  templateUrl: 'create-user.html'
})
export class CreateUser {

  text: string;

  constructor(private appSerive: AppService) {
    console.log('Hello CreateUser Component');
    this.text = 'Hello World';
  }
  createUser(email, password, roll) {
    this.appSerive.CreateUser(email, password, roll)
      .subscribe(res => {
        if (res) {
          console.log(res);
        }
      })


  }

}
