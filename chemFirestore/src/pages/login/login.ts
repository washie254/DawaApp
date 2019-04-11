import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../models/user';
import { AngularFireAuth } from'angularfire2/auth';
// import { RegisterPage }from '../../pages/register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
    try{
    const result =  this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    if(result){
      this.navCtrl.push(TabsPage);
    }
  }
  catch(e){
    console.error(e);
  }
  }
  register(){
    this.navCtrl.setRoot('RegisterPage');
  }

}
