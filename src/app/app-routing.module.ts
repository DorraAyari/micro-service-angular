import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ChambreComponent } from './chambre/chambre.component';
import { ChambreModificationComponent } from './chambre/chambre-modification/chambre-modification.component';
import { ChambreAjouterComponent } from './chambre/chambre-ajouter/chambre-ajouter.component';




import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogAjouterComponent } from './blog/blog-ajouter/blog-ajouter.component';
import { BlogModificationComponent } from './blog/blog-modification/blog-modification.component';




const routes: Routes = [

  { path: '', component: AppComponent },






  
 // { path: '', redirectTo: '/home', pathMatch: 'full' },

  // {path : 'ajouterUniversite', component : AjouterUniversiteComponent},
  // {path : 'ajouterUniversite/:id', component : AjouterUniversiteComponent},
  // {path : 'detailsUniversites' , component : DetailsUniversiteComponent},
  // {path : 'universites' , component : UniversitesComponent},
  // { path : 'showUniversites' , component : ListeUniversitesComponent},


/*   { path: 'reporting', component: ReportRoomComponent },
  { path: 'listreport', component: ReportListComponent },
  { path: 'updatereport/:id', component: UpdateReportsComponent },  */

 


  {path:'blog', component:BlogComponent},
  {path:'blog/:id',component:BlogModificationComponent},
  {path:'blog/add',component:BlogAjouterComponent},
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
