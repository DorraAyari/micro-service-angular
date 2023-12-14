import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Reclamation } from 'src/app/models/reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent  implements OnInit {

  Reclamation!: Reclamation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rec: ReclamationService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idReclamation = +params['idReclamation'];
      this.loadChambre(idReclamation);
    });
  }

  loadChambre(idReclamation: number): void {
    this.rec.getReclamationById(idReclamation).subscribe(
      (Reclamation: Reclamation) => {
        this.Reclamation = Reclamation;
      
      
              },
      (error) => {
        console.error('Error loading reclamation', error);
      }
    );
  }



  updateChambre(): void {
  
    this.rec.updateReclamation(this.Reclamation.idReclamation, this.Reclamation).subscribe(
      (updateReclamation: Reclamation) => {
        console.log('Reclamation updated successfully', updateReclamation);
        Swal.fire({
          title: 'Succès!',
          text: 'Produit mise à jour avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/reclamation']);
        });
      },
      (error) => {
        console.error('Error updating reclamation', error);

       
          Swal.fire({
            title: 'Erreur!',
            text: 'Une erreur s\'est produite lors de la mise à jour de la reclamation.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        
      }
    );
  }

  updateReclamation(): void {
    // Similar to the ajoutChambre method, handle the selectedBlocNom

    this.rec.updateReclamation(this.Reclamation.idReclamation,this.Reclamation).subscribe(

      (updateReclamation: Reclamation) => {
        console.log('Blog updated successfully', updateReclamation);
        Swal.fire({
          title: 'Succès!',
          text: 'Produit mise à jour avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/reclamation']);
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
