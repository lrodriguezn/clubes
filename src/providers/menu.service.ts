import { //IMenu, 
           // IMenuPage,
            EnterpriseListPage,
            EnterpriseListUserPage
         } from "../app/core/index";

import { HomePagePublic,
        HomePageUser,
        AboutPage,
        TutorialPage,
        SupportPage,
        LoginPage,
        SignupPage,

        ReservasPage,
        SugerenciasPage,
        PersonalPage,
        VehiculosPage,
        PedidosPage,
        InvitadosPage,
        IngresosContainer,
        EventosContainer,
        EstadoCuentaContainer,
        ServiciosPage,
        ConsumosContainer,
        CanjesContainer
     } from "../pages/index";

//Menu para usuarios NO conectado
export var appMenu_loggedOutPage:any[] = [
    { title: 'Navigate', key_translate:'menu_Navigate', icon: '' },
    { title: 'Account', key_translate:'menu_Account', icon: '' },
    { title: 'Tutorial', key_translate:'menu_Tutorial', icon: '' }
];
export var app_loggedOutPage:any[] = [
    { title: 'Home', menu:'Navigate', key_translate:'menu_Home', component:HomePagePublic, icon: 'home'},
   // { title: 'HomeButton', menu:'Navigate', key_translate:'Inicio (Prototipo#2)', component:HomePageButton, icon: 'home'},
   // { title: 'HomePage1', menu:'Navigate', key_translate:'Inicio (Prototipo#3)', component:Page1, icon: 'home'},
    { title: 'Enterprise', menu:'Navigate', key_translate:'menu_enterprise', component:EnterpriseListPage, icon: 'laptop'},
    { title: 'Login', menu:'Account', key_translate:'menu_Login', component:LoginPage, icon: 'log-in'},
    { title: 'Signup', menu:'Account', key_translate:'menu_Signup', component:SignupPage, icon: 'person-add'},
    { title: 'Support', menu:'Account', key_translate:'menu_Support', component:SupportPage, icon: 'help'},
    { title: 'About', menu:'Tutorial', key_translate:'menu_About', component:AboutPage, icon: 'information-circle'},
    { title: 'Tutorial', menu:'Tutorial', key_translate:'menu_goTutorial', component:TutorialPage, icon: 'laptop'},
];


//Menu para usuario conectados
export var appMenu_loggedInPage:any[] = [
    { title: 'Navigate', key_translate:'menu_Navigate', icon: '' },
    { title: 'Account', key_translate:'menu_Account', icon: '' },
    { title: 'Setting', key_translate:'menu_Setting', icon: '' },
    { title: 'About', key_translate:'menu_About', icon: '' },
    
];

export var app_loggedInPage:any[] = [
    { title: 'Account', menu:'Account', key_translate:'menu_MyAccount', component:SignupPage, icon: 'person'},
    { title: 'Logout', menu:'Account', key_translate:'menu_Logout', component:HomePagePublic, icon: 'log-out', logsOut:true},
    { title: 'Support', menu:'Account', key_translate:'menu_Support', component:SupportPage, icon: 'help'},
    { title: 'Home', menu:'Navigate', key_translate:'menu_Home', component:HomePageUser, icon: 'home'},
    { title: 'Enterprise', menu:'Navigate', key_translate:'menu_Myenterprise', component:EnterpriseListUserPage, icon: 'search'},
    { title: 'Consumos', menu:'Navigate', key_translate:'consumos_title', component:ConsumosContainer, icon: 'text'},
    { title: 'Pedidos', menu:'Navigate', key_translate:'mnu_pedidos', component:PedidosPage, icon: 'restaurant'},
    { title: 'Reservas', menu:'Navigate', key_translate:'mnu_reservas', component:ReservasPage, icon: 'star'},
    { title: 'ZeusReservas', menu:'Navigate', key_translate:'mnu_reservaszeus', component:ReservasPage, icon: 'star'},
    { title: 'EstadoCuenta', menu:'Navigate', key_translate:'mnu_estadocuenta', component:EstadoCuentaContainer, icon: 'clipboard'},
    { title: 'Servicios', menu:'Navigate', key_translate:'mnu_servicios', component:ServiciosPage, icon: 'apps'},
    { title: 'Eventos', menu:'Navigate', key_translate:'mnu_eventos', component:EventosContainer, icon: 'chatbubbles'},
    { title: 'Ingresos', menu:'Navigate', key_translate:'mnu_ingresos', component:IngresosContainer, icon: 'redo'},
    { title: 'Vehiculos', menu:'Navigate', key_translate:'mnu_vehiculos', component:VehiculosPage, icon: 'car'},
    { title: 'Personal', menu:'Navigate', key_translate:'mnu_personal', component:PersonalPage, icon: 'man'},
    { title: 'Invitados', menu:'Navigate', key_translate:'mnu_invitados', component:InvitadosPage, icon: 'people'},
    { title: 'Canjes', menu:'Navigate', key_translate:'mnu_canjes', component:CanjesContainer, icon: 'sync'},
    { title: 'Setting', menu:'Setting', key_translate:'menu_Setting', component:HomePagePublic, icon: 'settings'},
    //{ title: 'Atencion', menu:'About', key_translate:'mnu_atencioncliente', component:AboutPage, icon: 'ion-email-unread'},
    { title: 'Sugerencias', menu:'About', key_translate:'mnu_sugerencias', component:SugerenciasPage, icon: 'mail'},
    { title: 'About', menu:'About', key_translate:'menu_About', component:AboutPage, icon: 'information-circle'}
];