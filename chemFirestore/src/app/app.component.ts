import { Component, ViewChild  } from '@angular/core';
import { Platform, Nav, NavController, NavParams} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ManagemedPage } from '../pages/managemed/managemed';
import { TabsPage } from '../pages/tabs/tabs';
import { AddchemPage } from '../pages/addchem/addchem';
import { AddmedPage } from '../pages/addmed/addmed';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
//import {} from '@types/googlemaps';




@Component({
  templateUrl: 'app.html'
})



export class MyApp {
  @ViewChild(Nav) nav: Nav;
  public user: Array<any> = [];

  rootPage:any = TabsPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage,  icon: 'ios-home-outline'}, 
      { title:'Add Chemist', component: AddchemPage, icon:'ios-flask-outline' },
      { title: 'Add Medicine', component:AddmedPage, icon:"ios-contract-outline" },
      { title: 'Account', component: AccountPage,icon:"ios-contacts-outline"},
      { title: 'About', component: AboutPage, icon:'ios-information-circle-outline' }
    ];
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
    // this.nav.setRoot(page.component);
  }


}
