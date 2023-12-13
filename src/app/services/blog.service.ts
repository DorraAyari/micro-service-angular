import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = "http://localhost:8300/blog/";

  constructor(private http: HttpClient) { }

  findAll():Observable<Blog[]> {
    return this.http.get<Blog[]>(this.baseUrl + "findAll");
  }

  addBloc(data: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.baseUrl + "add", data);
  }

  deleteBloc(idBloc: number) {
    return this.http.delete(this.baseUrl + "delete/" + idBloc);
  }


  updateBlog(updateBloc:Blog,idBloc: number):Observable <Blog>{
    const url = `${this.baseUrl}update/${idBloc}`;
    return this.http.put<Blog>(url , updateBloc);
  }

  findById(idBloc: number):Observable<Blog> {
    return this.http.get<Blog>(this.baseUrl + idBloc);
  }


}
