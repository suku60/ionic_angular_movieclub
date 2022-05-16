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
    this.service.getLatestMovies(this.modelMovieOrTvShow).subscribe(LatestMovies =>
      
      console.log("response", LatestMovies)
      )

  }

}
