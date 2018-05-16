import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BranchList } from './branch-list';

@NgModule({
  declarations: [
    BranchList,
  ],
  imports: [
    IonicPageModule.forChild(BranchList),
  ],
  exports: [
    BranchList
  ]
})
export class BranchListModule {}
