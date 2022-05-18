import { Component, OnInit  } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { TheMovieDBService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  searchValue: string;
  movieOrTvShowValue: string;
  searchResultsRaw = [];
  searchResults = [];
  temporaryData: any;
  
  constructor(private service: TheMovieDBService) {
    this.searchValue = '';
    this.movieOrTvShowValue = 'tv';
  }

  ngOnInit(): void {
    this.loadSearchContainer();
  }
  searchLoader() {
    this.searchResults = [];

    if (this.searchValue.length > 2) {
      this.loadSearchContainer();
    }
  }

  selectionChanged() {
    this.searchResults = [];
    this.searchValue = '';
  }

  startLoadingData(event) {
    this.temporaryData = event;
    this.loadSearchContainer();
  }

  loadSearchContainer() {
    this.service.getSearch(this.movieOrTvShowValue, "pokemon").subscribe(LastestTvShowsObj => {

      this.searchResultsRaw = Object.entries(LastestTvShowsObj?.results).slice(0,11);

      this.searchResultsRaw.forEach(searchResultsMap => {
        this.searchResults.push({
          modelItem: searchResultsMap[1],
          id: searchResultsMap[1].id,
          title: searchResultsMap[1].title || searchResultsMap[1].name,
          image: environment.path_img+searchResultsMap[1].backdrop_path,
          poster: environment.path_img+searchResultsMap[1].poster_path,
          overview: searchResultsMap[1].overview,
          genres: searchResultsMap[1].genre_ids,
          rating: searchResultsMap[1].vote_average
        })  
        console.log("workingg?", "movieorserie", searchResultsMap[1]?.id)
          }
        )

    });
  }

}
