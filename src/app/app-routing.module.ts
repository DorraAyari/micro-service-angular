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
import { ShowCurrencyComponent } from './currency/show-currency/show-currency.component';
import { AddCurrencyComponent } from './currency/add-currency/add-currency.component';
import { UpdatCurrencyComponent } from './currency/updat-currency/updat-currency.component';
import { ShowReclamationComponent } from './reclamation/show-reclamation/show-reclamation.component';
import { UpdateReclamationComponent } from './reclamation/update-reclamation/update-reclamation.component';
import { AddReclamationComponent } from './reclamation/add-reclamation/add-reclamation.component';




const routes: Routes = [

  { path: '', component: AppComponent },




  {path:'reclamation', component:ShowReclamationComponent},
  {path:'update-reclamation/:id',component:UpdateReclamationComponent},
  {path:'addreclamation',component:AddReclamationComponent},



  

  {path:'currency', component:ShowCurrencyComponent},
  {path:'updatecurrency/:id',component:UpdatCurrencyComponent},
  {path:'addcurrency',component:AddCurrencyComponent},



  {path:'blog', component:BlogComponent},
  {path:'blog/:id',component:BlogModificationComponent},
  {path:'blog/add',component:BlogAjouterComponent},
  /*{path:'details',component:DetailsBlocComponent},*/

  {
    path: 'chambre',
    loadChildren: () => import('./chambre/chambre-route/chambre-route-routing.module').then(m => m.ChambreRouteRoutingModule)
  },



  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
