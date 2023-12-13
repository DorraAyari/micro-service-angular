import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiUrl = 'http://localhost:8300';

  constructor(private http: HttpClient) {}

  getFoyes(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.apiUrl}/foyer/findAll`);
  }
  updateFoyer(idFoyer: number, updatedFoyer: Currency): Observable<Currency> {
    const url = `${this.apiUrl}/currency/update/${idFoyer}`;
    return this.http.put<Currency>(url, updatedFoyer);
  }
   // Add a method to get a foyer by ID
   getFoyerById(idFoyer: number): Observable<Currency> {
    const url = `${this.apiUrl}/currency/${idFoyer}`;
    return this.http.get<Currency>(url);
  }
  deleteFoyer(idFoyer: number): Observable<void> {
    const url = `${this.apiUrl}/currency/delete/${idFoyer}`;
    return this.http.delete<void>(url);
  }
  ajouterFoyer(newFoyer: Currency , id: number): Observable<Currency> {
    const url = `${this.apiUrl}/currency/add/${id}`;
    return this.http.post<Currency>(url, newFoyer);
  }
  
  
}
