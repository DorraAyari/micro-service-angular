import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Foyer } from 'src/app/models/foyer';

import { FoyerService } from 'src/app/services/foyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-foyer',
  templateUrl: './edit-foyer.component.html',
  styleUrls: ['./edit-foyer.component.css']
})
export class EditFoyerComponent implements OnInit {

  foyer!: Foyer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foyerService: FoyerService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // '+' is used to convert the id to a number
      this.loadFoyer(id);

    });
  }

  loadFoyer(id: number): void {
    this.foyerService.getFoyerById(id).subscribe(
      (foyer: Foyer) => {
        this.foyer = foyer;
      },
      (error) => {
        console.error('Error loading foyer', error);
      }
    );
  }

  updateFoyer(): void {
    this.foyerService.updateFoyer(this.foyer.idFoyer, this.foyer).subscribe(
      (updatedFoyer: Foyer) => {
        console.log('Foyer updated successfully', updatedFoyer);

        // Show SweetAlert2 confirmation popup
        Swal.fire({
          title: 'Succès!',
          text: 'foyer mise à jour avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Optionally, navigate back to the chambre list or any other route
          this.router.navigate(['home-foyer']);
        });
      },
      (error) => {
        console.error('Error updating foyer', error);

        // Show SweetAlert2 error popup
        Swal.fire({
          title: 'Erreur!',
          text: 'Une erreur s\'est produite lors de la mise à jour de la foyer.',
          icon: 'error',
          confirmButtonText: 'OK'
        });

        // Handle error as needed
      }
    );
}
}
