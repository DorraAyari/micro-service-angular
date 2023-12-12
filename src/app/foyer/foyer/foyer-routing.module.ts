import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFoyerComponent } from '../home-foyer/home-foyer.component';
import { EditFoyerComponent } from '../edit-foyer/edit-foyer.component';
import { AddFoyerComponent } from '../add-foyer/add-foyer.component';


const routes: Routes = [{
  path: '',
  children: [
    {path:'',component:HomeFoyerComponent},
    { path:'editFoyer/:id', component:EditFoyerComponent},
    { path:'add-foyer', component:AddFoyerComponent },
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
