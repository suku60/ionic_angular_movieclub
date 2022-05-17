import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment.prod"
import { TheMovieDBService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  modelMovieOrTvShow = 'movie';
  max_movies = [];
  slider = [];

  constructor ( private service:  TheMovieDBService) {}
  
  ngOnInit(): void {
    // console.log(this.modelMovieOrTvShow)
    this.SliderContainerInit();
  }

  SliderContainerInit() { 
    this.service.getNowPlayingMovies(this.modelMovieOrTvShow).subscribe(LatestMoviesObj => {

      this.max_movies = Object.entries(LatestMoviesObj?.results).slice(0,11);

      this.max_movies.forEach(latestMovies => {
        this.slider.push({
          modelItem: latestMovies[1],
          id: latestMovies[1].id,
          title: latestMovies[1].title,
          image: environment.path_img+latestMovies[1].backdrop_path,
          poster: environment.path_img+latestMovies[1].poster_path,
          overview: latestMovies[1].overview,
          genres: latestMovies[1].genre_ids,
          rating: latestMovies[1].vote_average
            })  
          }
        )
      }
    )
  }
}