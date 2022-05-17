import { Component, OnInit  } from '@angular/core';
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
  
  constructor(private service: TheMovieDBService) {
    this.searchValue = '';
    this.movieOrTvShowValue = 'tv';
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

  loadSearchContainer() {
    this.service.getSearch(this.movieOrTvShowValue, this.searchValue).subscribe(LastestTvShowsObj => {

      this.searchResultsRaw = Object.entries(LastestTvShowsObj?.results).slice(0,11);

      this.searchResultsRaw.forEach(searchResultsMap => {
        console.log("workingg?", "movieorserie", this.movieOrTvShowValue, searchResultsMap[1].title || searchResultsMap[1].name)
        this.searchResults.push({
          modelItem: searchResultsMap[1],
          id: searchResultsMap[1].id,
          title: searchResultsMap[1].title || searchResultsMap[1].name,
          image: searchResultsMap[1].backdrop_path,
          poster: searchResultsMap[1].poster_path,
          overview: searchResultsMap[1].overview,
          genres: searchResultsMap[1].genre_ids,
          rating: searchResultsMap[1].vote_average
            })  
          }
        )

    });
  }

}
