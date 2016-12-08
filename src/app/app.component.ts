import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

//Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Auth } from '../providers/auth/auth';

import firebase from 'firebase'; // Big change from '* as firebase'.

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  constructor(
    platform: Platform,
    fireAuth: Auth,
  ) {

    firebase.auth().onAuthStateChanged((_currentUser) => {
      if (_currentUser){
        this.nav.setRoot(HomePage)
      } else {
        this.nav.setRoot(LoginPage)
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
