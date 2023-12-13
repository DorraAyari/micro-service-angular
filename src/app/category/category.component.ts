import { ChangeDetectorRef, Component } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Category } from '../models/category';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dtElement: DataTableDirective | undefined;

  chambres: Category[] = [];
  showDeleteModal = false;
  chambreToDeleteId!: number;
  dataTablesInstance: any;
  numeroChambreSearch: number | undefined;
  nomBlocSearch: string | undefined;
  constructor(
    private chambreService: CategoryService,
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
    this.chambreService.getChambres().subscribe(
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
    this.router.navigate(['/category-modifier', chambreId]);
  }
  deleteChambre(chambreId: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Voulez-vous vraiment supprimer cette cca ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.chambreService.deleteChambre(chambreId).subscribe(
          () => {
            console.log('Chambre deleted successfully');
  
          
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
    this.router.navigate(['/category-ajouter']);
  }


}
