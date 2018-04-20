import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IEnterprise } from './../../app/core/index';
import { CanjesService } from './../../providers/canjes.service';
import { ICanje } from './../../providers/interfaces/icanje';
import { CanjesDetailPage } from './canjes.detail';
import { CanjesNewPage } from './canjes.new';

@Component({
  selector: 'page-canjes',
  templateUrl: 'canjes.container.html'
})
export class CanjesContainer {
    segmentvalue:any="allcanje";
    enterprises: Array<IEnterprise>= [];
    canjes: Array<ICanje>= [];

    buttons=[{name:"buttonadd", key_translate:"canjes_add", icon:"star", color:"", isSmall:true, isClear:true, isRound:false, isOutline:false, isfull:false},
            ];
            
  constructor(private nav: NavController, private canjesService:CanjesService) { 
  }

    initialize(){
        
        this.canjesService.loadClubes();
        this.canjesService.loadCanjesLocal();

        this.canjesService.enterprises$.subscribe(data=>{
            this.enterprises = data;
        });

        this.canjesService.canjes$.subscribe(data=>{
            this.canjes = data;
        });
    }

    ngOnInit() {

        this.initialize();
    }

    CanjeDetail(canje:ICanje){
       if (canje)
        {
            this.nav.push(CanjesDetailPage, {
                canje: canje
            });
        }
    }
    
    newCanje(enterprise:IEnterprise){
       if (enterprise)
        {
            this.nav.push(CanjesNewPage, {
                enterprise: enterprise
            });
        }
        
    }

    Enterpriseclick(value)
    {
        switch (value.buttonname) {
            case "buttonadd":
                this.newCanje(value.enterprise);
                break;
            default:
                break;
        }
    }    
}
