import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { GoogleMapComponent} from '../components/google-map/google-map';

import { ManagemedPage } from '../pages/managemed/managemed'
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddchemPage } from '../pages/addchem/addchem';
import { AddmedPage } from '../pages/addmed/addmed';
import { MenuPage } from '../pages/menu/menu';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapsPage } from '../pages/maps/maps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';


@NgModule({
  declarations: [
    MyApp,
    GoogleMapComponent,
    // ManagemedPage,
    LoginPage,
    AccountPage,
    //RegisterPage,
    AddchemPage,
    AddmedPage,
    MapsPage,
    MenuPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //initialize angular with credentials from dashboard
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    //import angular firebase module to use database interactions
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // ManagemedPage,
    LoginPage,
    AccountPage,
    //RegisterPage,
    AddchemPage,
    AddmedPage,
    MapsPage,
    MenuPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen, FileChooser, File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})


export class AppModule {}
