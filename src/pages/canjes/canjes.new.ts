import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { EnterpriseService, IEnterprise, MultilingualService } from "../../app/core/index";
import { ICanje } from './../../providers/interfaces/icanje';

@Component({
  selector: 'page-canjesnew',
  templateUrl: 'canjes.new.html'
})
export class CanjesNewPage {
  enterprise:IEnterprise=null;
  canje: ICanje=<ICanje>{};
  submitted = false;

  constructor(private nav:NavController, 
              private navParams:NavParams,
              private toastCtrl: ToastController,
              private multilingualService:MultilingualService,
              private enterpriseService:EnterpriseService) { 
        this.enterprise = navParams.get('enterprise');
  }

  onNewCanje(form: NgForm) {
    if (this.submitted && form.valid) {
      this.submitted = false;

      let toast = this.toastCtrl.create({
        message: this.multilingualService.Translate("canjes_send_message"),
        duration: 4000
      });
      toast.present();
    }
  }

  onCancel() {
    this.submitted=false;
    if (this.nav.canGoBack())
      this.nav.pop();
  }  
}
