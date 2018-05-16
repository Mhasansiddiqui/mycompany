import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'create-branch',
  templateUrl: 'create-branch.html'
})
export class CreateBranch {

  allUsers
  constructor(private toastCtrl: ToastController,private appService: AppService) {

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

  SaveToast() {
    let toast = this.toastCtrl.create({
      message: 'Branch added successfully',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  RejectToast() {
    let toast = this.toastCtrl.create({
      message: 'Branch Not Saved',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
