import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { TheMovieDBService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  searchValue: string;
  idDetails: any;
  movieOrTvShowValue: string;
  searchResultsRaw = [];
  searchResults = [];
  searchDetailsRaw = [];
  searchDetails: any;
  temporaryData: any;
  
  constructor(private service: TheMovieDBService) {
    this.searchValue = '';
    this.movieOrTvShowValue = 'tv';
  }

  ngOnInit() {
    this.loadSearchContainer();
    this.searchDetails = []
    console.log(this.searchDetails)

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
    this.searchDetails = [];
  }

  startLoadingData(event) {
    this.temporaryData = event;
    this.loadSearchContainer();
  }

  selectMovieOrTvShow(id) {
    this.idDetails = id;
    console.log(this.idDetails)
    this.loadDetails(this.idDetails)
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
        // console.log("workingg?", "movieorserie", searchResultsMap[1]?.id)
          }
        )

    });
  }

  loadDetails(id) {
    console.log("details charging", this.searchDetails, "?????")
    this.service.getDetails(this.movieOrTvShowValue, id).subscribe(searchDetailObj => {

      console.log("as", typeof(searchDetailObj) ,searchDetailObj.adult, searchDetailObj.id)
      
      this.searchDetails = searchDetailObj;

      console.log("sasdasd", this.searchDetails)

    });
  }

  clearDetails(){
    this.searchDetails = 0;
    console.log("sasdasd", this.searchDetails)


  }

}
