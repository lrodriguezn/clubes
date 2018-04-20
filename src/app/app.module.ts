import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule, TranslateStaticLoader, TranslateLoader,TranslateService } from 'ng2-translate/ng2-translate';
import { AngularFireModule } from 'angularfire2';
//import { AuthService } from '../providers/auth-service';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';

//Services
import { AppConfigService,
          MultilingualService,
          UserService,
          EnterpriseService,
          EnterpriseComponent,
          EnterpriseListPage, 
          EnterpriseListUserPage, 
          EnterpriseDetailPage, 
          EnterpriseTourPage,
          EnterpriseMapPage } from './core/index';

//Page
import {HomePagePublic, 
        TutorialPage,
        HomePageButton,
        HomePageUser,
        AboutPage,
        AboutPopover,
        SupportPage,
        LoginPage,
        SignupPage,

        ReservasPage,
        ZeusOnlineContainer,
        SugerenciasPage,
        PersonalPage,
        VehiculosPage,
        PedidosPage,
        InvitadosPage,
        IngresosContainer,
        IngresosPage,
        EventosContainer,
        EventosPage,
        EstadoCuentaContainer,
        EstadoCuentaPage,
        ServiciosPage,
        ConsumosPage,
        ConsumosContainer,
        ConsumosDetailPage,
        CanjesContainer,
        CanjeComponet,
        CanjesDetailPage,
        CanjesNewPage
       } from '../pages/index';

//Providers
import {CanjesService} from '../providers/index';


export const firebaseConfig = {
    apiKey: "AIzaSyB63tFa9upmluE7tefIGWBz5FXMO0MDnFI",
    authDomain: "nativescript-8222f.firebaseapp.com",
    databaseURL: "https://nativescript-8222f.firebaseio.com",
    storageBucket: "nativescript-8222f.appspot.com",
    messagingSenderId: "19788216743"
};


@NgModule({
  declarations: [
    MyApp,
    Page1,
    HomePagePublic,
    HomePageButton,
    HomePageUser,
    TutorialPage,
    AboutPage,
    AboutPopover,
    SupportPage,
    LoginPage,
    SignupPage,

    EnterpriseComponent,
    EnterpriseListPage, 
    EnterpriseListUserPage, 
    EnterpriseDetailPage, 
    EnterpriseTourPage,
    EnterpriseMapPage,

    ReservasPage,
    ZeusOnlineContainer,
    SugerenciasPage,
    PersonalPage,
    VehiculosPage,
    PedidosPage,
    InvitadosPage,
    IngresosContainer,
    IngresosPage,
    EventosContainer,
    EventosPage,
    EstadoCuentaContainer,
    EstadoCuentaPage,
    ServiciosPage,
    ConsumosPage,
    ConsumosContainer,
    ConsumosDetailPage,
    CanjesContainer,
    CanjeComponet,
    CanjesDetailPage,
    CanjesNewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    HomePagePublic,
    HomePageButton,
    HomePageUser,
    TutorialPage,
    AboutPage,
    AboutPopover,
    SupportPage,
    LoginPage,
    SignupPage,

    EnterpriseComponent,
    EnterpriseListPage, 
    EnterpriseListUserPage, 
    EnterpriseDetailPage, 
    EnterpriseTourPage,
    EnterpriseMapPage,

    ReservasPage,
    ZeusOnlineContainer,
    SugerenciasPage,
    PersonalPage,
    VehiculosPage,
    PedidosPage,
    InvitadosPage,
    IngresosContainer,
    IngresosPage,
    EventosContainer,
    EventosPage,
    EstadoCuentaContainer,
    EstadoCuentaPage,
    ServiciosPage,
    ConsumosPage,
    ConsumosContainer,
    ConsumosDetailPage,
    CanjesContainer,
    CanjeComponet,
    CanjesDetailPage,
    CanjesNewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
              TranslateService,
              Storage,
              AppConfigService,
              MultilingualService,
              UserService,
              //FirebaseService,
              //AuthService,
              EnterpriseService,
              CanjesService
              ]
})
export class AppModule {}

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}