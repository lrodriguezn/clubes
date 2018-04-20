import { Component } from '@angular/core';
import { ConsumosDetailPage } from './consumos.detail';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-consumoscontainer',
  templateUrl: 'consumos.container.html'
})
export class ConsumosContainer {
    fechainicial:any="03/01/2017";
    fechafinal:any="03/01/2017";

    segmentvalue:any="mes";

    buttons=[{name:"buttonadd", key_translate:"canjes_add", icon:"star", color:"", isSmall:true, isClear:true, isRound:false, isOutline:false, isfull:false},
            ];
        
  constructor(public navCtrl: NavController,) { 
  }

    initialize(){
        
    }

    ngOnInit() {

        this.initialize();
    }

    onDetail()
    {
        this.navCtrl.push(ConsumosDetailPage);
    }
}
