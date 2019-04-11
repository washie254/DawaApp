import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-managemed',
  templateUrl: 'managemed.html',
})
export class ManagemedPage {
  public items: Array<any> = [];
  public itemRef: firebase.database.Reference = firebase.database().ref(`/Medicine`);

  constructor(public navCtrl: NavController, private fbd: AngularFireDatabase, public navParams: NavParams) {
  }

 update(){

 }

  delete(){

  }

  ionViewDidLoad() {
    this.itemRef.on('value', itemSnapshot => {
      this.items = [];
      itemSnapshot.forEach( itemSnap => {
        this.items.push(itemSnap.val());
        return false;
      });
    }); 
  }

}
