import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private baseUrl="http://localhost:8300/universite";

  constructor(private httpClient : HttpClient) { }


  getAllUniversities() : Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/findAll`);
  }


  getUniversiteById(idUniversite : number) : Observable<Reclamation> {
    return this.httpClient.get<Reclamation>(`${this.baseUrl}/findById/${idUniversite}` );
  }

  saveUniversite(objUniversite : Reclamation) : Observable<Reclamation>{
    return this.httpClient.post<Reclamation>(`${this.baseUrl}/add`, objUniversite);
}

 updateUniversite(idUniversite : number, universite : Reclamation) : Observable<Reclamation>{
    return this.httpClient.put<Reclamation>(`${this.baseUrl}/update/${idUniversite}`, universite);
}

deleteUniversite(idUniversite : number) : Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/delete/${idUniversite}`);
}


}



