import { Component, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent {

  newChambre: Reclamation = {
    idReclamation: 0,
    titreReclamation : '',
    descriptionRec: '',
  };
 
  constructor(
    private router: Router,
    private chambreService: ReclamationService,
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
    if (!this.newChambre.titreReclamation || !this.newChambre.descriptionRec) {
      alert('Veuillez remplir le formulaire avant de soumettre.');
      return;
    }

    // Set the selected Bloc directly

    const chambreToAdd: Reclamation = {
      idReclamation: this.newChambre.idReclamation,
      titreReclamation: this.newChambre.titreReclamation,
      descriptionRec: this.newChambre.descriptionRec,
      
    };

    this.chambreService.saveUniversite(chambreToAdd).subscribe(
      (chambreToAdd: Reclamation) => {
        console.log('Reclamtion added successfully', chambreToAdd);
        Swal.fire({
          title: 'Succès!',
          text: 'Reclamtion ajoutée avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/reclamation']);
          this.newChambre = {
            idReclamation: 0,
    titreReclamation : '',
    descriptionRec: '',
          };
        });
      },
      (error) => {
        console.error('Error adding chambre', error);
      }

       
    );
  }
}
