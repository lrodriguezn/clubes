import { Component } from '@angular/core';
import { MenuController, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePagePublic } from './../homepublic/homepublic';
import { HomePageUser } from './../homeuser/homeuser';
import { UserService } from './../../app/core/services/user.service';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage {
  showSkip = true;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public storage: Storage,
    private userService:UserService
  ) { }

  startApp() {
    // verificar si existe un usuario logeado
    this.userService.hasLoggedIn().then((hasLoggedIn) => {
      if (hasLoggedIn === true)
      {
        this.navCtrl.setRoot(HomePageUser).then(() => {
          this.storage.set('hasSeenTutorial', 'true');
        })
      }
      else
      {
        this.navCtrl.setRoot(HomePagePublic).then(() => {
          this.storage.set('hasSeenTutorial', 'true');
        })
      }
    });    

    /*
    this.navCtrl.push(Page1).then(() => {
      this.storage.set('hasSeenTutorial', 'true');
    })
    */
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}