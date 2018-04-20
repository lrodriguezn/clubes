import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICanje } from './../../providers/interfaces/icanje';
import { CanjesService } from './../../providers/canjes.service';

@Component({
  selector: 'z-canje',
  templateUrl: 'canjes.html'
})
export class CanjeComponet {

  @Input('canje') 
  canje: ICanje=null;
  
  @Output() edit: EventEmitter<ICanje> = new EventEmitter<ICanje>();
  
  constructor(private canjesService:CanjesService) { }

  getEstadoCaje()
  {
    return this.canjesService.getEstadoCanje(this.canje.estado);
  }

  getColorEstadoCanje()
  {
    //return '#3b5998'; //this.canjesService.getEstadoCanje(this.canje.estado);
    return this.canjesService.getColorEstadoCanje(this.canje.estado);
  }

  EditCanje(){
     this.edit.emit(this.canje);
  }
}
