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
import { ReservationComponent } from './reservations/reservation/reservation.component';
import { AddReservationComponent } from './reservations/add-reservation/add-reservation.component';
import { ToastModule } from 'primeng/toast';
import { AcademicYearPipe } from './academic-year.pipe';

import { AjouterUniversiteComponent } from './universite/ajouter-universite/ajouter-universite.component';
import { UniversiteService } from './services/universite.service';
import { ListeUniversitesComponent } from './universite/liste-universites/liste-universites.component';
import { DetailsUniversiteComponent } from './universite/details-universite/details-universite.component';

import { AddBlocComponent } from './manage-bloc/add-bloc/add-bloc.component';
import { DeleteBlocComponent } from './manage-bloc/delete-bloc/delete-bloc.component';
import { EditBlocComponent } from './manage-bloc/edit-bloc/edit-bloc.component';
import { ShowBlocComponent } from './manage-bloc/show-bloc/show-bloc.component';
import { UniversitesComponent } from './universite/universites/universites.component';
import { UniversitComponent } from './universite/universit/universit.component';
import { CouleurDirective } from './directive/couleur.directive';
import { MessageErreurComponent } from './shared/message-erreur/message-erreur.component';
import { HighlightDirective } from './directive/highlight.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PopupComponent } from './universite/popup/popup.component';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { EditFoyerComponent } from './foyer/edit-foyer/edit-foyer.component';
import { HomeFoyerComponent } from './foyer/home-foyer/home-foyer.component';
import { AddFoyerComponent } from './foyer/add-foyer/add-foyer.component';
import { FoyerService } from './services/foyer.service';

import { FoyerModule } from './foyer/foyer/foyer.module';

import { AddBlocDirectiveDirective } from './add-bloc-directive.directive';
import { ChambreRouteModule } from './chambre/chambre-route/chambre-route.module';
import { ChambreRouteRoutingModule } from './chambre/chambre-route/chambre-route-routing.module';
import { UniversiteRootModule } from './universite/universite-root/universite-root.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    SidebarComponent,
    ReservationComponent,
    AddReservationComponent,
    AcademicYearPipe,



    AddFoyerComponent,
    EditFoyerComponent,
    HomeFoyerComponent,

    MessageErreurComponent,
    AddBlocComponent,
    DeleteBlocComponent,
    EditBlocComponent,
    HighlightDirective,
    ShowBlocComponent,
    CouleurDirective,
    MessageErreurComponent,
    HighlightDirective,
    CapitalizePipe,
    PopupComponent,
    CouleurDirective,
    HighlightDirective,
    EditFoyerComponent,
    HomeFoyerComponent,
    AddBlocDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FoyerModule,
    NgToastModule,
    BrowserAnimationsModule,
    ToastModule,
    ChambreRouteRoutingModule,
    UniversiteRootModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
