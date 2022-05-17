import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  modelMovieOrTvShow = 'movie';

  constructor ( private service:  TheMovieDBService) {}
  
  ngOnInit(): void {
    console.log(this.modelMovieOrTvShow)
    this.SliderContainerInit()
  }

  SliderContainerInit() { 
    this.service.getNowPlayingMovies(this.modelMovieOrTvShow).subscribe(LatestMovies =>
      
      
      console.log("response", LatestMovies?.results, "maping?", LatestMovies?.results?.map(movies => {
        console.log("prueba map")

      }))
      )

  }

}
