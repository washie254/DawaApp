import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase } from 'angularfire2/database';
import { TabsPage } from '../tabs/tabs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth,private afDatabase:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  createProfile(){
    this.afAuth.authState.take(1).subscribe( auth=>{
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
      .then(()=> this.navCtrl.setRoot(TabsPage))
    })
  }

}
