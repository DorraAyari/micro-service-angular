import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private apiUrl = 'http://localhost:8300';

  constructor(private http: HttpClient) {}

  getFoyes(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}/foyer/findAll`);
  }
  updateFoyer(idFoyer: number, updatedFoyer: Feedback): Observable<Feedback> {
    const url = `${this.apiUrl}/foyer/update/${idFoyer}`;
    return this.http.put<Feedback>(url, updatedFoyer);
  }
   // Add a method to get a foyer by ID
   getFoyerById(idFoyer: number): Observable<Feedback> {
    const url = `${this.apiUrl}/foyer/${idFoyer}`;
    return this.http.get<Feedback>(url);
  }
  deleteFoyer(idFoyer: number): Observable<void> {
    const url = `${this.apiUrl}/foyer/delete/${idFoyer}`;
    return this.http.delete<void>(url);
  }
  ajouterFoyer(newFoyer: Feedback , id: number): Observable<Feedback> {
    const url = `${this.apiUrl}/foyer/add/${id}`;
    return this.http.post<Feedback>(url, newFoyer);
  }
  
  
}
