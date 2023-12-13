import { Component, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chambre-ajouter',
  templateUrl: './chambre-ajouter.component.html',
  styleUrls: ['./chambre-ajouter.component.css']
})
export class ChambreAjouterComponent {

  newChambre: Produit = {
    idProduit: 0,
    nomProduit : '',
    descriptionProduit: '',
    prixProduit: 0,
  };
 
  constructor(
    private router: Router,
    private chambreService: ProduitService,
    private cdr: ChangeDetectorRef
  ) {
  }


  ngOnInit() {
  }

  updateBlocId(event: any) {
    const selectedBlocValue: string = event.target.value;

 //   const selectedBlocValue: string = event.target.value.split(': ')[1];

    
  }



  ajouterChambre(): void {
    if (!this.newChambre.nomProduit || !this.newChambre.descriptionProduit) {
      alert('Veuillez remplir le formulaire avant de soumettre.');
      return;
    }

    // Set the selected Bloc directly

    const chambreToAdd: Produit = {
      idProduit: this.newChambre.idProduit,
      nomProduit: this.newChambre.nomProduit,
      descriptionProduit: this.newChambre.descriptionProduit,
      prixProduit: this.newChambre.prixProduit,
      
    };

    this.chambreService.ajouterChambre(chambreToAdd).subscribe(
      (chambreToAdd: Produit) => {
        console.log('Produit added successfully', chambreToAdd);
        Swal.fire({
          title: 'Succès!',
          text: 'Produit ajoutée avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/chambre']);
          this.newChambre = {
            idProduit: 0,
    nomProduit : '',
    descriptionProduit: '',
    prixProduit: 0,
          };
        });
      },
      (error) => {
        console.error('Error adding chambre', error);
      }

       
    );
  }
}
