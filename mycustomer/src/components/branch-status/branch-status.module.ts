import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BranchStatus } from './branch-status';

@NgModule({
  declarations: [
    BranchStatus,
  ],
  imports: [
    IonicPageModule.forChild(BranchStatus),
  ],
  exports: [
    BranchStatus
  ]
})
export class BranchStatusModule {}
