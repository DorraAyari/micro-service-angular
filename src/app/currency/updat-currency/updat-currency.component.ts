import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updat-currency',
  templateUrl: './updat-currency.component.html',
  styleUrls: ['./updat-currency.component.css']
})
export class UpdatCurrencyComponent implements OnInit {

  Currency!: Currency;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitService: CurrencyService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadCurrency(id);
    });
  }

  loadCurrency(id: number): void {
    this.produitService.getFoyerById(id).subscribe(
      (Currency: Currency) => {
        this.Currency = Currency;
      
              },
              (error) => {
                console.error('Error loading currency', error);
                // Ajoutez cette ligne pour afficher les détails de l'erreur dans la console
                console.error(error);
              }
    );
  }



  updateChambre(): void {
    // Similar to the ajoutChambre method, handle the selectedBlocNom

   
    this.produitService.updateCurrency(this.Currency.id, this.Currency).subscribe(
      (updateCurrency: Currency) => {
        console.log('Produit updated successfully', updateCurrency);
        Swal.fire({
          title: 'Succès!',
          text: 'Produit mise à jour avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/currency']);
        });
      },
      (error) => {
        console.error('Error updating Currency', error);

       
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
