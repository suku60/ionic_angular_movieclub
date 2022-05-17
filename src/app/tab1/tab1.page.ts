import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  modelMovieOrTvShow = 'movie';
  slider = [];

  constructor ( private service:  TheMovieDBService) {}
  
  ngOnInit(): void {
    console.log(this.modelMovieOrTvShow)
    this.SliderContainerInit()
  }

  SliderContainerInit() { 
    this.service.getNowPlayingMovies(this.modelMovieOrTvShow).subscribe(LatestMoviesObj => {
      console.log("response", LatestMoviesObj?.results, "maping?", LatestMoviesObj?.results?.forEach(latestMoviesResult => {
        console.log(latestMoviesResult.id)
      }))

      LatestMoviesObj?.results?.forEach(latestMovies => {
        this.slider.push({
          id: latestMovies.id
        },
        console.log("working?")
        )
        
      }
      
      )
    }
      
      
      
      )

  }

}
