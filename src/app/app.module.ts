import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './shared/body/body.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { ToastModule } from 'primeng/toast';
import { AcademicYearPipe } from './academic-year.pipe';


import { CouleurDirective } from './directive/couleur.directive';
import { MessageErreurComponent } from './shared/message-erreur/message-erreur.component';
import { HighlightDirective } from './directive/highlight.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AddBlocDirectiveDirective } from './add-bloc-directive.directive';
import { ChambreRouteModule } from './chambre/chambre-route/chambre-route.module';
import { ChambreRouteRoutingModule } from './chambre/chambre-route/chambre-route-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogAjouterComponent } from './blog/blog-ajouter/blog-ajouter.component';
import { BlogModificationComponent } from './blog/blog-modification/blog-modification.component';
import { ShowCurrencyComponent } from './currency/show-currency/show-currency.component';
import { UpdatCurrencyComponent } from './currency/updat-currency/updat-currency.component';
import { AddCurrencyComponent } from './currency/add-currency/add-currency.component';
import { ShowReclamationComponent } from './reclamation/show-reclamation/show-reclamation.component';
import { UpdateReclamationComponent } from './reclamation/update-reclamation/update-reclamation.component';
import { AddReclamationComponent } from './reclamation/add-reclamation/add-reclamation.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    SidebarComponent,
    HighlightDirective,
             BlogComponent,
             BlogAjouterComponent,
             BlogModificationComponent,
             ShowCurrencyComponent,
             UpdatCurrencyComponent,
             AddCurrencyComponent,
             ShowReclamationComponent,
             UpdateReclamationComponent,
             AddReclamationComponent,
             
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    DataTablesModule,
    NgToastModule,
    BrowserAnimationsModule,
    ToastModule,
    ChambreRouteRoutingModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
