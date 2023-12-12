import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ChambreComponent } from './chambre/chambre.component';
import { ChambreModificationComponent } from './chambre/chambre-modification/chambre-modification.component';
import { ChambreAjouterComponent } from './chambre/chambre-ajouter/chambre-ajouter.component';


import { ReservationComponent } from './reservations/reservation/reservation.component';
import { AddReservationComponent } from './reservations/add-reservation/add-reservation.component';
import { ReportingModule } from './reservations/reporting/reporting.module';
import { ReportRoomComponent } from './reservations/report-room/report-room.component';
import { ReportListComponent } from './reservations/report-list/report-list.component';
import { UpdateReportsComponent } from './reservations/update-reports/update-reports.component';



import { AjouterUniversiteComponent } from './universite/ajouter-universite/ajouter-universite.component';
import { ListeUniversitesComponent } from './universite/liste-universites/liste-universites.component';
import { DetailsUniversiteComponent } from './universite/details-universite/details-universite.component';

import { ShowBlocComponent } from './manage-bloc/show-bloc/show-bloc.component';
import { EditBlocComponent } from './manage-bloc/edit-bloc/edit-bloc.component';
import { AddBlocComponent } from './manage-bloc/add-bloc/add-bloc.component';

import { UniversitesComponent } from './universite/universites/universites.component';


import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AppComponent } from './app.component';




const routes: Routes = [

  { path: '', component: AppComponent },

  {path:'home-foyer',loadChildren:()=>import('../app/foyer/foyer/foyer.module').then((t)=>t.FoyerModule)},


  { path: 'gestionreservation', component: ReservationComponent },

  { path: 'confirmreservation', component: AddReservationComponent },




  //Manage Users


  { path: 'gestionreservation', component: ReservationComponent },
  { path: 'confirmreservation', component: AddReservationComponent },
  { path: 'ajouterreservation', component: AddReservationComponent },





  {
    path: 'universite',
    loadChildren: () => import('./universite/universite-root/universite-root.module').then(m => m.UniversiteRootModule)
  },


 // { path: '', redirectTo: '/home', pathMatch: 'full' },

  // {path : 'ajouterUniversite', component : AjouterUniversiteComponent},
  // {path : 'ajouterUniversite/:id', component : AjouterUniversiteComponent},
  // {path : 'detailsUniversites' , component : DetailsUniversiteComponent},
  // {path : 'universites' , component : UniversitesComponent},
  // { path : 'showUniversites' , component : ListeUniversitesComponent},

  { path: 'gestionreservation', component: ReservationComponent },
  { path: 'ajouterreservation', component: AddReservationComponent },
/*   { path: 'reporting', component: ReportRoomComponent },
  { path: 'listreport', component: ReportListComponent },
  { path: 'updatereport/:id', component: UpdateReportsComponent },  */

  {
    path: 'reporting',
    loadChildren: () => import('../app/reservations/reporting/reporting.module').then(m => m.ReportingModule)
  },





{
    path: 'reporting',
    loadChildren: () => import('./reservations/reporting/reporting.module').then(m => m.ReportingModule)
  },
  {
    path: 'bloc',
    loadChildren: () => import('./manage-bloc/bloc-routing/boc-routing.module').then(m => m.BocRoutingModule)
  },
/*
  {path:'bloc', component:ShowBlocComponent},
  {path:'bloc/:id',component:EditBlocComponent},
  {path:'add',component:AddBlocComponent},*/
  /*{path:'details',component:DetailsBlocComponent},*/

  {
    path: 'chambre',
    loadChildren: () => import('./chambre/chambre-route/chambre-route-routing.module').then(m => m.ChambreRouteRoutingModule)
  },

  // {
  //   path : 'showUniversites' , component : ListeUniversitesComponent , children : [
  //     {path : 'ajouterUniversite', component : AjouterUniversiteComponent},
  //     {path : 'ajouterUniversite/:id', component : AjouterUniversiteComponent},
  //     {path : 'detailsUniversites' , component : DetailsUniversiteComponent},
  //     {path : 'universites' , component : UniversitesComponent}
  //   ]
  // }



  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
