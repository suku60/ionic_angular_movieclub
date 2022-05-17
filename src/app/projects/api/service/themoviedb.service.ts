import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const api_key = environment.api_key

@Injectable({
  providedIn: 'root'
})

export class TheMovieDBService {

  constructor(private http: HttpClient) { 

  }

  getLatestMovies(movieOrTvShow: string): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/${movieOrTvShow}/latest?api_key=${api_key}&language=en-US`;
    return this.http.get(callURL);
  }

  getNowPlayingMovies(movieOrTvShow: string): Observable<any> {
    // we will display these movies in our slider, since there's no clear objective yet in the app.
    const callURL = `https://api.themoviedb.org/3/${movieOrTvShow}/now_playing?api_key=${api_key}&language=en-US&page=1`;
    return this.http.get(callURL);
  }

  getTopRatedMovies(movieOrTvShow: string, page: number): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/${movieOrTvShow}/top_rated?api_key=${api_key}&language=en-US&page=${page}`;
    return this.http.get(callURL);
  }

  getPopularMovies(movieOrTvShow: string, page: number, genres: string): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/${movieOrTvShow}/popular?api_key=${api_key}&language=en-US&page=${page}&with_genres=${genres}`;
    return this.http.get(callURL);
  }

  getGenreLists(movieOrTvShow: string): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/genre/${movieOrTvShow}/list?api_key=${api_key}&language=en-US`;
    return this.http.get(callURL);
  }

  getDetails(movieOrTvShow: string, id: string): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/${movieOrTvShow}/${id}?api_key=${api_key}&language=en-US`;
    return this.http.get(callURL);
  }
}
