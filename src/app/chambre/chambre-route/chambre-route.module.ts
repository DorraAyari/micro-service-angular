import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRouteRoutingModule } from './chambre-route-routing.module';
import { ChambreComponent } from '../chambre.component';
import { ChambreModificationComponent } from '../chambre-modification/chambre-modification.component';
import { ChambreAjouterComponent } from '../chambre-ajouter/chambre-ajouter.component';
import { NavbarComponent } from 'src/app/shared/navbar copy 2/navbar.component';
import { BarSideComponent } from 'src/app/shared/bar-side copy/bar-side.component';
import {  HttpClientModule } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgToastModule } from 'ng-angular-popup';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    ChambreComponent,
    ChambreModificationComponent,
    ChambreAjouterComponent,
    
    NavbarComponent,
    BarSideComponent
  ],
  imports: [
    CommonModule,
    ChambreRouteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NgToastModule,
    MatSnackBarModule,
    ToastModule,
  ],
  schemas: [

  CUSTOM_ELEMENTS_SCHEMA
  ],



providers: [

],
bootstrap: [AppComponent]
})
export class ChambreRouteModule {

}
