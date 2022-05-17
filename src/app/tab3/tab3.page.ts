import { Component  } from '@angular/core';
import { TheMovieDBService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  searchValue: string;
  movieOrTvShowValue: any;
  searchResultsArr = [];
  
  constructor(private service: TheMovieDBService) {
    this.searchValue = '';
    this.movieOrTvShowValue = 'movie';
    console.log("b4:", this.searchResultsArr)
  }
  
  
  loadSearchContainer() {
    this.service.getSearch(this.movieOrTvShowValue, this.searchValue).subscribe(searchResponseObj => {
      searchResponseObj.results.forEach(searchResult => {
        this.searchResultsArr.push({
          modelItem: searchResult,
          id: searchResult.id,
          title: this.movieOrTvShowValue === 'movie' ? searchResult.title : searchResult.name,
          overview: searchResult.overview,
          image: searchResult.poster_path,
          rating: searchResult.vote_average
        });
        console.log("after:", this.searchResultsArr)
      });
    });
  }

}
