import { Component,ViewChild } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { chemistItem } from '../../models/chemist-item/chemist-item.interface';
import { AngularFireDatabase } from "angularfire2/database";
import { storage, initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from '../../app/app.firebase.config';
import firebase from 'firebase';
import { Injectable } from '@angular/core'; 
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-addchem',
  templateUrl: 'addchem.html',
})
export class AddchemPage {
  //creating a new object
  // chemistItem ={} as chemistItem;
  arrData = []


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fdb: AngularFireDatabase) {

  }

  addChem(ChemistName: string, ChemistLocation: string, ChemistBusinessNumber: Number,
    ChemistAccountType: string,ChemistAccountNumber: number,ChemistDescription: string ): void {

      const chemistRef: firebase.database.Reference = firebase.database().ref(`/Chemist`);
      chemistRef.push({
        ChemistName: ChemistName,
        ChemistLocation: ChemistLocation,
        ChemistBusinessNumber: ChemistBusinessNumber,
        ChemistAccountType: ChemistAccountType,
        ChemistAccountNumber: ChemistAccountNumber,
        ChemistDescription: ChemistDescription
      })
  
  }
}
