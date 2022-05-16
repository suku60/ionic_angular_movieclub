import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiKey = "e53bbde3abe182705b021e68f89d3006"
@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(private http: HttpClient) { 

  }

  getLatestMovies(type: string): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`;
    return this.http.get(callURL);
  }
}
