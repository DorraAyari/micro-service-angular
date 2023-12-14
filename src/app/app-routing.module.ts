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
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackModifierComponent } from './feedback/feedback-modifier/feedback-modifier.component';
import { FeedbackAjouterComponent } from './feedback/feedback-ajouter/feedback-ajouter.component';
import { CategoryComponent } from './category/category.component';
import { CategoryAjouterComponent } from './category/category-ajouter/category-ajouter.component';
import { CategoryModifierComponent } from './category/category-modifier/category-modifier.component';




const routes: Routes = [

  { path: '', component: AppComponent },




  {path:'reclamation', component:ShowReclamationComponent},
  {path:'update-reclamation/:id',component:UpdateReclamationComponent},
  {path:'addreclamation',component:AddReclamationComponent},



  

  {path:'currency', component:ShowCurrencyComponent},
  {path:'updatecurrency/:id',component:UpdatCurrencyComponent},
  {path:'addcurrency',component:AddCurrencyComponent},



  {path:'category',component:CategoryComponent},
  { path: 'category-modifier/:id', component: CategoryModifierComponent },
  { path: 'category-ajouter', component: CategoryAjouterComponent},
  {path:'feedback',component:FeedbackComponent},
  { path: 'feedback-modifier/:id', component: FeedbackModifierComponent },
  { path: 'feedback-ajouter', component: FeedbackAjouterComponent},
  {
    path: 'chambre',
    loadChildren: () => import('./chambre/chambre-route/chambre-route-routing.module').then(m => m.ChambreRouteRoutingModule)
  },


  {path:'blog',component:BlogComponent},
  { path: 'blog-modification/:id', component: BlogModificationComponent },
  { path: 'blog-ajouter', component: BlogAjouterComponent},
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
