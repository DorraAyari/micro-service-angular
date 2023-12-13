
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
import { Blog } from '../models/blog';
import { BlogService } from '../services/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dtElement: DataTableDirective | undefined;

  chambres: Blog[] = [];
  showDeleteModal = false;
  chambreToDeleteId!: number;
  dataTablesInstance: any;
  numeroChambreSearch: number | undefined;
  nomBlocSearch: string | undefined;
  constructor(
    private chambreService: BlogService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.dtOptions= {
      destroy: true,
    };

    this.dataTablesInstance = $('#chambresTable').DataTable();

    this.getChambres();
  }

  ngAfterViewInit(): void {
    if (this.dataTablesInstance) {
      this.dataTablesInstance.destroy();
    }

    // Activer DataTables une fois que la vue a été initialisée
    this.dataTablesInstance = $('#chambresTable').DataTable();
  }
  updateDataTables(): void {
    if (!this.dataTablesInstance) {
      this.dataTablesInstance = $('#chambresTable').DataTable();
    }

    this.dataTablesInstance.clear();
    this.dataTablesInstance.rows.add(this.chambres);
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
  
  getChambres(): void {
    this.chambreService.findAll().subscribe(
      (chambres) => {
        console.log('Chambres:', chambres);
  
        // Update the chambres array
        this.chambres = chambres;
  
        // Update the DataTable with the new data
        this.updateDataTables();
      },
      (error) => {
        console.error('Error getting chambres', error);
        // Handle error as needed
      }
    );
  }
  navigateToModifier(chambreId: number): void {
    this.router.navigate(['/blog-modification', chambreId]);
  }
  deleteChambre(chambreId: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Voulez-vous vraiment supprimer cette chambre ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.chambreService.deleteBloc(chambreId).subscribe(
          () => {
            console.log('Chambre deleted successfully');
  
            // Recharger les données DataTables
            if (this.dataTablesInstance) {
              this.dataTablesInstance.destroy();
            }
            // Reload DataTables data
            this.getChambres();
          },
          (error) => {
            console.error('Error deleting chambre', error);
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
    this.router.navigate(['/blog-ajouter']);
  }


}
