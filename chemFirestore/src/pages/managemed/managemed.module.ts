import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagemedPage } from './managemed';

@NgModule({
  declarations: [
    ManagemedPage,
  ],
  imports: [
    IonicPageModule.forChild(ManagemedPage),
  ],
})
export class ManagemedPageModule {}
