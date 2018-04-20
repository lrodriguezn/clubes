import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage,
         SignupPage,
          SupportPage,
          } from '../index';

import { EnterpriseListPage } from './../../app/core/component/enterprises/list/list.enterprise';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  image:string="assets/img/img_principal.png";

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
 