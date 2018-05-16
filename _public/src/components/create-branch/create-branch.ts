import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service'
@Component({
  selector: 'create-branch',
  templateUrl: 'create-branch.html'
})
export class CreateBranch {

  allUsers
  constructor(private appService: AppService) {

    this.getAllUser();
  }
  createBranch(branchName, ownerName, ownerNumber, address, branchType, senderId, user, Landline) {
    this.appService.CreateBranch(branchName, ownerName, ownerNumber, address, branchType, senderId, user, Landline)
      .subscribe(res => console.log(res));
  }
  getAllUser() {
    this.appService.getUsers()
      .subscribe(res => {
        if (res) {
          this.allUsers = res.user.success;
        }
      });
  }
}
