import { EnterpriseListPage } from './../../app/core/component/enterprises/list/list.enterprise';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage,
         SignupPage,
          SupportPage,
          } from '../index';


@Component({
  selector: 'page-homebutton',
  templateUrl: 'homebutton.html'
})
export class HomePageButton {
  image:string="assets/img/logobackground.png";

  constructor(public navCtrl: NavController) {}

/*
  signInWithFacebook(): void {
    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  private onSignInSuccess(): void {
    console.log("Facebook display name ",this._auth.displayName());
    this.user=this._auth.displayName();
  }  
*/

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  onLogin() {
    this.navCtrl.push(LoginPage);
  }

  onSupport() {
    this.navCtrl.push(SupportPage);
  }

  onEnterprisesTour() {
    this.navCtrl.push(EnterpriseListPage,{viewTour:true});
  }

}
 