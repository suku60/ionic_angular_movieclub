import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { TheMovieDBService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  searchValue: string;
  idDetails: string;
  movieOrTvShowValue: string;
  searchResultsRaw = [];
  searchResults = [];
  searchDetailsRaw = [];
  searchDetails = [];
  temporaryData: any;
  
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

  startLoadingData(event) {
    this.temporaryData = event;
    this.loadSearchContainer();
  }

  selectMovieOrTvShow(id) {
    this.idDetails = id;
    console.log(this.idDetails, id)
  }

  loadSearchContainer() {
    this.service.getSearch(this.movieOrTvShowValue, this.searchValue).subscribe(LastestTvShowsObj => {

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
        // console.log("workingg?", "movieorserie", searchResultsMap[1]?.id)
          }
        )

    });
  }

  loadDetails() {
    console.log("details charging")
    this.service.getDetails(this.movieOrTvShowValue, this.idDetails).subscribe(LastestTvShowsObj => {

      this.searchDetailsRaw = Object.entries(LastestTvShowsObj?.results).slice(0,11);

      this.searchDetailsRaw.forEach(searchDetailMap => {
        this.searchDetails.push({
          modelItem: searchDetailMap[1],
          id: searchDetailMap[1].id,
          title: searchDetailMap[1].title || searchDetailMap[1].name,
          image: environment.path_img+searchDetailMap[1].backdrop_path,
          poster: environment.path_img+searchDetailMap[1].poster_path,
          overview: searchDetailMap[1].overview,
          genres: searchDetailMap[1].genre_ids,
          rating: searchDetailMap[1].vote_average
        })  
        // console.log("workingg?", "movieorserie", searchResultsMap[1]?.id)
          }
        )

    });
  }

}
