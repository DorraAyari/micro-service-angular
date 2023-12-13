// services/chambre.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produit } from '../models/produit';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8300';

  constructor(private http: HttpClient) {}


  getChambres():Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/category/findAll`);
  }
    updateChambre(chambreId: number, updatedChambre: Category): Observable<Category> {
    const url = `${this.apiUrl}/category/${chambreId}`;
    return this.http.put<Category>(url, updatedChambre);
  }
   // Add a method to get a chambre by ID
   getChambreById(chambreId: number): Observable<Category> {
    const url = `${this.apiUrl}/category/${chambreId}`;
    return this.http.get<Category>(url);
  }
  deleteChambre(chambreId: number): Observable<void> {
    const url = `${this.apiUrl}/category/delete/${chambreId}`;
    return this.http.delete<void>(url);
  }
  ajouterChambre(newChambre: Category): Observable<Category> {
    const url = `${this.apiUrl}/category/add`;
    return this.http.post<Category>(url, newChambre);
  }

}
