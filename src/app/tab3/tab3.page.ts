import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from '../projects/api/service/themoviedb.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  search = '';
  modelMovieOrTvShow = '';
  search_response = [];

  constructor ( private service:  TheMovieDBService) {}
  
  ngOnInit(): void {
    this.SliderContainerInit();
  }

  SliderContainerInit() { 
   
  }
}