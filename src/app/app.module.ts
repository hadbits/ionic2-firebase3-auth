//import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ForgotPage } from '../pages/forgot/forgot';
import { RegisterPage } from '../pages/register/register';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Auth } from '../providers/auth/auth';

import firebase from 'firebase'; // Big change from '* as firebase'.
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCV5Rqx_DQkiDyZU9Qbv_2Ky9lbwTRsXHg",
  authDomain: "ionic2-firebase3-16100.firebaseapp.com",
  databaseURL: "https://ionic2-firebase3-16100.firebaseio.com",
  storageBucket: "ionic2-firebase3-16100.appspot.com",
  messagingSenderId: "928605927311"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPage,
    RegisterPage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPage,
    RegisterPage
  ],
  providers: [
    Auth
  ]
})
export class AppModule { }
