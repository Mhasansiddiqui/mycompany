import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateBranch } from './create-branch';

@NgModule({
  declarations: [
    CreateBranch,
  ],
  imports: [
    IonicPageModule.forChild(CreateBranch),
  ],
  exports: [
    CreateBranch
  ]
})
export class CreateBranchModule {}
