import { Component, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.css']
})
export class AddCurrencyComponent {
  newCurrency: Currency = {
    id: 0,
    name : '',
    code: '',
    symbol: '',
  };
 
  constructor(
    private router: Router,
    private chambreService: CurrencyService,
    private cdr: ChangeDetectorRef
  ) {
  }


  ngOnInit() {
  }


  ajoutcurrency(): void {
    if (!this.newCurrency.name || !this.newCurrency.code) {
      alert('Veuillez remplir le formulaire avant de soumettre.');
      return;
    }

    // Set the selected Bloc directly

    const chambreToAdd: Currency = {
      id: this.newCurrency.id,
      name: this.newCurrency.name,
      code: this.newCurrency.code,
      symbol: this.newCurrency.symbol,
      
    };

    this.chambreService.ajoutcurrency(chambreToAdd).subscribe(
      (chambreToAdd: Currency) => {
        console.log('Currency added successfully', chambreToAdd);
        Swal.fire({
          title: 'Succès!',
          text: 'Currency ajoutée avec succès.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/currency']);
          this.newCurrency = {
            id: 0,
    name : '',
    code: '',
    symbol: '',
          };
        });
      },
      (error) => {
        console.error('Error adding chambre', error);
      }

       
    );
  }
}
