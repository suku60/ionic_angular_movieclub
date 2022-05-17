import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  modelMovieOrTvShow = 'tv';
  max__shows = [];
  slider = [];

  constructor ( private service:  TheMovieDBService) {}
  
  ngOnInit(): void {
    // console.log(this.modelMovieOrTvShow)
    this.SliderContainerInit();
  }

  SliderContainerInit() { 
    this.service.getNowPlayingTVShows(this.modelMovieOrTvShow).subscribe(LatestMoviesObj => {

      this.max__shows = Object.entries(LatestMoviesObj?.results).slice(0,11);

      this.max__shows.forEach(latestMovies => {
        this.slider.push({
          modelItem: latestMovies[1],
          id: latestMovies[1].id,
          title: latestMovies[1].title,
          image: latestMovies[1].backdrop_path,
          poster: latestMovies[1].poster_path,
          overview: latestMovies[1].overview,
          genres: latestMovies[1].genre_ids,
          rating: latestMovies[1].vote_average
        },
        )
        
      }
      
      )
    }
      
      
      
      )

  }

}