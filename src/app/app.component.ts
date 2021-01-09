import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { timer } from 'rxjs';
// import { HeaderColor } from '@ionic-native/header-color/ngx';




@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  tabBarElement: any;
  splash = true;

  constructor(
    // private headerColor: HeaderColor,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    
  ) {  this.initializeApp();
    // this.tabBarElement = document.querySelector('.tabbar');
  }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //     timer(4000).subscribe(() => this.showSplash = false)
  //   });
  //   ionViewDidLoad() {
  //     this.tabBarElement.style.display = 'none';
  //     setTimeout(() => {
  //       this.splash = false;
  //       this.tabBarElement.style.display = 'flex';
  //     }, 1000);
  // }
  initializeApp() {
    // this.headerColor.tint('#becb29');
      this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
      setTimeout(() => {
        this.splash = false;
      }, 4000);
})}}
