import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';
import { Feedback } from '../models/feedback';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private apiUrl = 'http://localhost:8300';

  constructor(private http: HttpClient) {}

  getFoyes(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}/feedback/findAll`);
  }
  updateFoyer(idFoyer: number, updatedFoyer: Feedback): Observable<Feedback> {
    const url = `${this.apiUrl}/feedback/${idFoyer}`;
    return this.http.put<Feedback>(url, updatedFoyer)
      .pipe(
        catchError((error) => {
          console.error('Error updating feedback', error);
          return throwError('Something went wrong');
        })
      );
  }
   // Add a method to get a foyer by ID
   getFoyerById(idFoyer: number): Observable<Feedback> {
    const url = `${this.apiUrl}/feedback/${idFoyer}`;
    return this.http.get<Feedback>(url);
  }
  deleteFoyer(idFoyer: number): Observable<void> {
    const url = `${this.apiUrl}/feedback/${idFoyer}`;
    return this.http.delete<void>(url);
  }

  ajouterFoyer(newFoyer: Feedback): Observable<Feedback> {
    const url = `${this.apiUrl}/feedback/add/`;
    return this.http.post<Feedback>(url, newFoyer);
  }
  
}
