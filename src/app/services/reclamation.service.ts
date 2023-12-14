import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private baseUrl="http://localhost:8300";

  constructor(private httpClient : HttpClient) { }


  getAllUniversities() : Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/Reclamation/findAll`);
  }


  saveUniversite(objUniversite : Reclamation) : Observable<Reclamation>{
    return this.httpClient.post<Reclamation>(`${this.baseUrl}/Reclamation/add`, objUniversite);
}

 updateReclamation(idReclamation : number, reclamation : Reclamation) : Observable<Reclamation>{
    return this.httpClient.put<Reclamation>(`${this.baseUrl}/Reclamation/update/${idReclamation}`, reclamation);
}

getReclamationById(idReclamation: number): Observable<Reclamation> {
  const url = `${this.baseUrl}/Reclamation/${idReclamation}`;
  return this.httpClient.get<Reclamation>(url);
}

deleteUniversite(idReclamation : number) : Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/Reclamation/delete/${idReclamation}`);
}


}



