import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { isPresent } from 'ionic-angular/umd/util/util';
// import { FirebaseObjectObservable } from 'angularfire2';
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { Profile } from '../../models/profile';
// import {} from '@types/googlemaps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  profileData: AngularFireObject<Profile>;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController,private afDatabase:AngularFireDatabase) {

  }

  ionViewWillLoad(){
    this.afAuth.authState.take(1).subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message:`Welcome ${data.email}`,
          duration: 2000
        }). present();
        
        this.profileData = this.afDatabase.object(`profile/${data.uid}`)
      }
    })
  }

  // ionViewWillLoad(){
  //   this.afAuth.authState.subscribe(data=>{
  //     this.toast.create({
  //       message: `Welcome ${data.email}`,
  //       duration: 2000
  //     }).present()
  //   });
  // }

  addChem(){
    this.navCtrl.push('AddchemPage');
  }

  addMed(){
    this.navCtrl.push('AddmedPage');
  }



}
