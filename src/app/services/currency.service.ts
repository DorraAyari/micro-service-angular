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

  ajoutcurrency(newcurrency: Currency ): Observable<Currency> {
    const url = `${this.apiUrl}/Currency/add`;
    return this.http.post<Currency>(url, newcurrency);
  }

  getCurrency(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.apiUrl}/Currency/findAll`);
  }
  updateCurrency(id: number, updateCurrency: Currency): Observable<Currency> {
    const url = `${this.apiUrl}/Currency/update/${id}`;
    return this.http.put<Currency>(url, updateCurrency);
  }
   // Add a method to get a foyer by ID
   getFoyerById(id: number): Observable<Currency> {
    const url = `${this.apiUrl}/Currency/${id}`;
    return this.http.get<Currency>(url);
  }
  deleteFoyer(id: number): Observable<void> {
    const url = `${this.apiUrl}/Currency/delete/${id}`;
    return this.http.delete<void>(url);
  }
  
  
  
}
