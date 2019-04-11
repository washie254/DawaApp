import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { storage, initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from '../../app/app.firebase.config';
import firebase from 'firebase';
import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/map';
import { ManagemedPage } from '../managemed/managemed';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-addmed',
  templateUrl: 'addmed.html',
})
export class AddmedPage {
  arrData = []

  constructor(public navCtrl: NavController,private fdb: AngularFireDatabase,
     public navParams: NavParams, private filechooser: FileChooser, private file: File ) {
  }

  choose(){
    this.filechooser.open().then((uri)=>{
      alert(uri);

      this.file.resolveLocalFilesystemUrl(uri).then((newUrl)=>{
        alert(JSON.stringify(newUrl));

        let dirPath = newUrl.nativeURL;
        let dirPathSegments = dirPath.split('/')  //break the string to an array
        dirPathSegments.pop()                   // remove the last element [filename]
        dirPath = dirPathSegments.join('/')

         this.file.readAsArrayBuffer(dirPath, newUrl.name).then(async (buffer)=>{
          await this.upload(buffer, newUrl.name);
         })

      })

    })
  }
  
  async upload(buffer, name){
    let blob = new Blob([buffer], {type:"image/jpeg"});

    let storage = firebase.storage()

    storage.ref(`image/`+ name).put(blob).then((d)=>{
      alert("Done");
    }).catch((error)=>{
      alert(JSON.stringify(error))
    });

  }


  addMed(MedicineImage: string,MedicineName:string,MedicineCategory:string,MedicinePrice:number,MedicineDescription:string): void {

      const chemistRef: firebase.database.Reference = firebase.database().ref(`/Medicine`);
      chemistRef.push({
        MedicineImage: MedicineImage,
        MedicineName: MedicineName,
        MedicineCategory: MedicineCategory,
        MedicinePrice:  MedicinePrice,
        MedicineDescription: MedicineDescription 
      })
  
  }
  
  ManageMed(){
    this.navCtrl.push('ManagemedPage')
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddmedPage');
  }
 
}
