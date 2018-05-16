import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'create-user',
  templateUrl: 'create-user.html'
})
export class CreateUser {

  constructor(private toastCtrl: ToastController,private appSerive: AppService) {
    console.log('Hello CreateUser Component');
    
  }
  createUser(email, password, roll) {
    this.appSerive.CreateUser(email, password, roll)
      .subscribe(res => {
        if (res) {
          console.log(res);
        }
      })


  }



  SaveToast() {
    let toast = this.toastCtrl.create({
      message: 'User added successfully',
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
      message: 'User Not Saved',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


}
