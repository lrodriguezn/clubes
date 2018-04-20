import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  ConsumosContainer,
          IngresosContainer,
          PedidosPage,
          EventosContainer,
          ReservasPage,
          ServiciosPage,
          InvitadosPage,
          SugerenciasPage,
          ZeusOnlineContainer,
          EstadoCuentaContainer,
          CanjesContainer
          } from '../index';

import { MultilingualService } from './../../app/core/services/multilingual.service';

@Component({
  selector: 'page-homeuser',
  templateUrl: 'homeuser.html'
})
export class HomePageUser {
  image:string="assets/img/logobackground.png";
  menu:Array<any>=[
                    {key:"consumos",
                      image:"assets/img/imgconsumos.jpg",
                      title:"consumos_title",
                      page:ConsumosContainer,
                      pageparameter:{}
                    },
                    {key:"estadocuenta",
                      image:"assets/img/imgestadocuenta.jpg",
                      title:"mnu_estadocuenta",
                      page:EstadoCuentaContainer,
                      pageparameter:{}
                    },                  
                    {key:"ingresos",
                      image:"assets/img/imgingresos.jpg",
                      title:"mnu_ingresos",
                      page:IngresosContainer,
                      pageparameter:{}
                    },                    
                    {key:"pedidos",
                      image:"assets/img/imgpedidos.jpg",
                      title:"mnu_pedidos",
                      page:PedidosPage,
                      pageparameter:{}
                    },                                        
                    {key:"eventos",
                      image:"assets/img/imgeventos.jpg",
                      title:"mnu_eventos",
                      page:EventosContainer,
                      pageparameter:{}
                    },                                        
                    {key:"canjes",
                      image:"assets/img/imgcanjes.jpg",
                      title:"mnu_canjes",
                      page:CanjesContainer,
                      pageparameter:{}
                    },                                                            
                    {key:"reservas",
                      image:"assets/img/imgreservas2.jpg",
                      title:"mnu_reservas",
                      page:ReservasPage,
                      pageparameter:{}
                    },                                                            
                    {key:"zeusreservas",
                      image:"assets/img/imgreservas.jpg",
                      title:"mnu_reservaszeus",
                      page:ZeusOnlineContainer,
                      pageparameter:{}
                    },                                                            
                    {key:"servicios",
                      image:"assets/img/imgservicios.jpg",
                      title:"mnu_servicios",
                      page:ServiciosPage,
                      pageparameter:{}
                    },                                                            
                    {key:"elclub",
                      image:"assets/img/img_club.png",
                      title:"historiaclub_title",
                      page:ServiciosPage,
                      pageparameter:{}
                    },                                                            
                    {key:"invitados",
                      image:"assets/img/imginvitados.jpg",
                      title:"invitados_title",
                      page:InvitadosPage,
                      pageparameter:{}
                    },                                                            
                    {key:"sugerencias",
                      image:"assets/img/imgsugerencias.jpg",
                      title:"sugerencias_title",
                      page:SugerenciasPage,
                      pageparameter:{}
                    }                                                           
                ];

  constructor(public navCtrl: NavController, private multilingualService:MultilingualService) {}

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

  onOpenPage(page:any)
  {
    this.navCtrl.push(page);
  }

  onConsumos() {
    this.navCtrl.push(ConsumosContainer);
  }

  onEstadoCuenta() {
    this.navCtrl.push(EstadoCuentaContainer);
  }

  onIngresos() {
    this.navCtrl.push(IngresosContainer);
  }

  onPedidos() {
    this.navCtrl.push(PedidosPage);
  }

  onEventos() {
    this.navCtrl.push(EventosContainer);
  }

  onCanjes() {
    this.navCtrl.push(CanjesContainer);
  }

  onReservas() {
    this.navCtrl.push(ReservasPage);
  }

  onZeusReservas() {
    this.navCtrl.push(ZeusOnlineContainer);
  }

  onServicios() {
    this.navCtrl.push(ServiciosPage);
  }  

  onClub() {
    this.navCtrl.push(ServiciosPage);
  }    

  onInvitados() {
    this.navCtrl.push(InvitadosPage);
  }

  onSugerencias() {
    this.navCtrl.push(SugerenciasPage);
  }

}
 