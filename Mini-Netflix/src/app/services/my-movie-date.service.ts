import { Injectable } from '@angular/core';

import { moviesModel } from '../model/IMovies';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MyMovieDateService {

  moviesUrl="/assets/movies.json"
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<moviesModel[]>{
    return this.http.get<moviesModel[]>(this.moviesUrl, {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        //'Authorization': "Bearer " + token
      })
    });
  }


  getMovieByID(id:number): Observable<moviesModel>{
    return this.http.get<moviesModel>('/assets/movies.json?id='+id);
  }


}
