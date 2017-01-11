import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Auth } from '../providers/auth/auth';

import firebase from 'firebase'; // Big change from '* as firebase'.

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
  ) {

    this.initializeFirebase()
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
    ];

  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  initializeFirebase(){
    firebase.auth().onAuthStateChanged((_currentUser) => {
      if (_currentUser){
        this.nav.setRoot(HomePage)
      } else {
        this.nav.setRoot(LoginPage)
      }
    })
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
