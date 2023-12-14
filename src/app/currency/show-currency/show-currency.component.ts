
import { Router } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ChangeDetectorRef,
  NgModule,
} from '@angular/core';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

declare var $: any; // Déclaration de $ pour éviter les erreurs de TypeScript

import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-show-currency',
  templateUrl: './show-currency.component.html',
  styleUrls: ['./show-currency.component.css']
})
export class ShowCurrencyComponent implements OnInit, AfterViewInit, OnDestroy {

  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dtElement: DataTableDirective | undefined;

  currency: Currency[] = [];
  showDeleteModal = false;
  currencyToDeleteId!: number;
  dataTablesInstance: any;
  numerocurrencyearch: number | undefined;
  nomBlocSearch: string | undefined;
  constructor(
    private currencyservice: CurrencyService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.dtOptions= {
      destroy: true,
    };

    this.dataTablesInstance = $('#currencyTable').DataTable();

    this.getcurrency();
  }

  
  ngAfterViewInit(): void {
    if (this.dataTablesInstance) {
      this.dataTablesInstance.destroy();
    }

    // Activer DataTables une fois que la vue a été initialisée
    this.dataTablesInstance = $('#currencyTable').DataTable();
  }
  updateDataTables(): void {
    if (!this.dataTablesInstance) {
      this.dataTablesInstance = $('#currencyTable').DataTable();
    }

    this.dataTablesInstance.clear();
    this.dataTablesInstance.rows.add(this.currency);
    this.dataTablesInstance.draw();
  }


  ngOnDestroy(): void {
    // Détruire DataTables lorsque le composant est détruit pour éviter les fuites de mémoire
    if (this.dataTablesInstance) {
      this.dataTablesInstance.clear().destroy();
    }
    if (this.dtElement) {
      this.dtTrigger.unsubscribe();
    }
  }
  
  getcurrency(): void {
    this.currencyservice.getCurrency().subscribe(
      (currency) => {
        console.log('Currency:', currency);
  
        // Update the currency array
        this.currency = currency;
  
        // Update the DataTable with the new data
        this.updateDataTables();
      },
      (error) => {
        console.error('Error getting currency', error);
        // Handle error as needed
      }
    );
  }
  navigateToModifier(currencyId: number): void {
    this.router.navigate(['updatecurrency', currencyId]);
  }
  deletecurrency(currencyId: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Voulez-vous vraiment supprimer cette currency ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.currencyservice.deleteFoyer(currencyId).subscribe(
          () => {
            console.log('currency deleted successfully');
  
            // Recharger les données DataTables
            if (this.dataTablesInstance) {
              this.dataTablesInstance.destroy();
            }
            // Reload DataTables data
            this.getcurrency();
          },
          (error) => {
            console.error('Error deleting currency', error);
            // Handle error as needed
          }
        );
      }
    });
  }
  
  
  // Close the confirmation modal
  cancelDelete(): void {
    this.showDeleteModal = false;
  }

  navigateToAjouter(): void {
    this.router.navigate(['addcurrency']);
  }


}

