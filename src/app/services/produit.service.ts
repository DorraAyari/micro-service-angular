// services/chambre.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:8300';

  constructor(private http: HttpClient) {}


  getChambres():Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/produit/findAll`);
  }
  updateChambre(chambreId: number, updatedChambre: Produit): Observable<Produit> {
    const url = `${this.apiUrl}/produit/update/${chambreId}`; // Ensure "update" is part of the URL
    return this.http.put<Produit>(url, updatedChambre);
  }
  

   // Add a method to get a chambre by ID
   getChambreById(chambreId: number): Observable<Produit> {
    const url = `${this.apiUrl}/produit/${chambreId}`;
    return this.http.get<Produit>(url);
  }
  deleteChambre(chambreId: number): Observable<void> {
    const url = `${this.apiUrl}/produit/delete/${chambreId}`;
    return this.http.delete<void>(url);
  }
  ajouterChambre(newChambre: Produit): Observable<Produit> {
    const url = `${this.apiUrl}/produit/add`;
    return this.http.post<Produit>(url, newChambre);
  }

}
