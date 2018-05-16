import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service'


@Component({
  selector: 'reminder',
  templateUrl: 'reminder.html'
})
export class Reminder {

  users = null;
  userId = [];
  constructor(private appService: AppService) {
    this.getUsers();
  }
  getUsers() {
    this.appService.getUsers()
      .subscribe(res => this.users = res.user.success)
  }
  updateUser(user) {
    this.userId.push(user);
  }
  createReminder(title,body){
    this.appService.createReminder(title,body,this.userId)
      .subscribe(res => console.log(res));

  }

}
