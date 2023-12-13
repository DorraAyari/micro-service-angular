import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-modifier',
  templateUrl: './category-modifier.component.html',
  styleUrls: ['./category-modifier.component.css']
})
export class CategoryModifierComponent {
  
  produit!: Category;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadChambre(id);
    });
  }

  loadChambre(id: number): void {
    this.produitService.getChambreById(id).subscribe(
      (produit: Category) => {
        this.produit = produit;
      
      
              },
      (error) => {
        console.error('Error loading chambre', error);
      }
    );
  }



  updateChambre(): void {
    // Similar to the ajoutChambre method, handle the selectedBlocNom

    this.produitService.updateChambre(this.produit.id,this.produit).subscribe(

      (updatedChambre: Category) => {
        console.log('category updated successfully', updatedChambre);
        Swal.fire({
          title: 'Succès!',
          text: 'Produit mise à jour avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/category']);
        });
      },
      (error) => {
        console.error('Error updating chambre', error);

       
          Swal.fire({
            title: 'Erreur!',
            text: 'Une erreur s\'est produite lors de la mise à jour de la chambre.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        
      }
    );
  }
}
