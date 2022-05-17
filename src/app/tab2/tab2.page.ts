import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  modelMovieOrTvShow = 'tv';
  max_shows = [];
  slider = [];

  constructor ( private service:  TheMovieDBService) {}
  
  ngOnInit(): void {
    // console.log(this.modelMovieOrTvShow)
    this.SliderContainerInit();
  }

  SliderContainerInit() { 
    this.service.getNowPlayingTVShows(this.modelMovieOrTvShow).subscribe(LastestTvShowsObj => {

      this.max_shows = Object.entries(LastestTvShowsObj?.results).slice(0,11);

      this.max_shows.forEach(latestTvShows => {

        this.slider.push({
          modelItem: latestTvShows[1],
          id: latestTvShows[1].id,
          title: latestTvShows[1].name,
          image: latestTvShows[1].backdrop_path,
          poster: latestTvShows[1].poster_path,
          overview: latestTvShows[1].overview,
          genres: latestTvShows[1].genre_ids,
          rating: latestTvShows[1].vote_average
            })  
          }
        )
      }
    )
  }
}