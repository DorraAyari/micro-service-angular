import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chambre-modification',
  templateUrl: './chambre-modification.component.html',
  styleUrls: ['./chambre-modification.component.css']
})
export class ChambreModificationComponent implements OnInit {

  produit!: Produit;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadChambre(id);
    });
  }

  loadChambre(id: number): void {
    this.produitService.getChambreById(id).subscribe(
      (produit: Produit) => {
        this.produit = produit;
      
      
              },
      (error) => {
        console.error('Error loading chambre', error);
      }
    );
  }



  updateChambre(): void {
    // Similar to the ajoutChambre method, handle the selectedBlocNom

   
    this.produitService.updateChambre(this.produit.idProduit, this.produit).subscribe(
      (updatedChambre: Produit) => {
        console.log('Produit updated successfully', updatedChambre);
        Swal.fire({
          title: 'Succès!',
          text: 'Produit mise à jour avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/chambre']);
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
