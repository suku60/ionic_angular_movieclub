import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment.prod';

const api_key = environment.api_key

@Injectable({
  providedIn: 'root'
})

export class TheMovieDBService {

  constructor(private http: HttpClient, public modalController: ModalController) { 

  }

  getNowPlayingMovies(movieOrTvShow: string): Observable<any> {
    // we will display these movies in our slider, since there's no clear objective yet in the app.
    const callURL = `https://api.themoviedb.org/3/${movieOrTvShow}/now_playing?api_key=${api_key}&language=en-US&page=1`;
    return this.http.get(callURL);
  }

  getNowPlayingTVShows(movieOrTvShow: string): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/${movieOrTvShow}/on_the_air?api_key=${api_key}&language=en-US&page=1`;
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

  getSearch(movieOrTvShow: string, search: string): Observable<any> {
    const callURL = `https://api.themoviedb.org/3/search/${movieOrTvShow}?api_key=${api_key}&query=${search}&page=1`;
    return this.http.get(callURL);
  }
}
