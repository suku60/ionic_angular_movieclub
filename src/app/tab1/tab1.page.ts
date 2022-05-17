import { Component, OnInit } from '@angular/core';
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
    console.log(this.modelMovieOrTvShow)
    this.SliderContainerInit()
  }

  SliderContainerInit() { 
    this.service.getNowPlayingMovies(this.modelMovieOrTvShow).subscribe(LatestMoviesObj => {
      // console.log("response", LatestMoviesObj?.results, "maping?", LatestMoviesObj?.results?.forEach(latestMoviesResult => {
      //   console.log(latestMoviesResult.id)
      // }))

      this.max_movies = Object.entries(LatestMoviesObj?.results).slice(0,11);

      console.log("max?;", this.max_movies)

      this.max_movies.forEach(latestMovies => {
        console.log("console log inside mapping", latestMovies[1])
        this.slider.push({
          modelItem: latestMovies,
          id: latestMovies.id,
          title: latestMovies.title,
          image: latestMovies.backgrop_path,
          poster: latestMovies.poster_path,
          overview: latestMovies.overview,
          genres: latestMovies.genre_ids,
          rating: latestMovies.vote_average
        },
        console.log("working?", this.slider)
        )
        
      }
      
      )
    }
      
      
      
      )

  }

}
