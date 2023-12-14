
import { Router } from '@angular/router';
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
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
@Component({
  selector: 'app-show-reclamation',
  templateUrl: './show-reclamation.component.html',
  styleUrls: ['./show-reclamation.component.css']
})
export class ShowReclamationComponent implements OnInit, AfterViewInit, OnDestroy {

  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dtElement: DataTableDirective | undefined;

  reclamation: Reclamation[] = [];
  showDeleteModal = false;
  currencyToDeleteId!: number;
  dataTablesInstance: any;
  numerocurrencyearch: number | undefined;
  nomBlocSearch: string | undefined;
  constructor(
    private reclamtionService: ReclamationService,
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
    this.dataTablesInstance.rows.add(this.reclamation);
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
    this.reclamtionService.getAllUniversities().subscribe(
      (reclamation) => {
        console.log('reclamation:', reclamation);
  
        // Update the currency array
        this.reclamation = reclamation;
  
        // Update the DataTable with the new data
        this.updateDataTables();
      },
      (error) => {
        console.error('Error getting reclamation', error);
        // Handle error as needed
      }
    );
  }
  navigateToModifier(idReclamation: number): void {
    this.router.navigate(['update-reclamation', idReclamation]);
  }

  deletereclamation(idReclamation: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Voulez-vous vraiment supprimer cette reclamation ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.reclamtionService.deleteUniversite(idReclamation).subscribe(
          () => {
            console.log('reclamation deleted successfully');
  
            // Recharger les données DataTables
            if (this.dataTablesInstance) {
              this.dataTablesInstance.destroy();
            }
            // Reload DataTables data
            this.getcurrency();
          },
          (error) => {
            console.error('Error deleting Reclamation', error);
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
    this.router.navigate(['addreclamation']);
  }


}

