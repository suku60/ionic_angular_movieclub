import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiKey = "e53bbde3abe182705b021e68f89d3006"

const movieOrTvShow = "movie"

const id = ""

const genres = ""

const page = "" 

const id = ""

@Injectable({
  providedIn: 'root'
})

export class ThemoviedbService {

  constructor(private http: HttpClient) { 

  }

  getLatestMovies(movieOrTvShow: string): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/${movieOrTvShow}/latest?api_key=${apiKey}&language=en-US`;
    return this.http.get(callURL);
  }

  getTopRatedMovies(movieOrTvShow: string, page: number): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/${movieOrTvShow}/top_rated?api_key=${apiKey}&language=en-US&page=${page}`;
    return this.http.get(callURL);
  }

  getPopularMovies(movieOrTvShow: string, page: number, genres: string): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/${movieOrTvShow}/popular?api_key=${apiKey}&language=en-US&page=${page}&with_genres=${genres}`;
    return this.http.get(callURL);
  }

  getGenreLists(movieOrTvShow: string): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/genre/${movieOrTvShow}/list?api_key=${apiKey}&language=en-US`;
    return this.http.get(callURL);
  }

  getDetails(movieOrTvShow: string, id: string): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/${movieOrTvShow}/${id}?api_key=${apiKey}&language=en-US`;
    return this.http.get(callURL);
  }
}
