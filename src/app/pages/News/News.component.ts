import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'app-News',
  templateUrl: './News.component.html',
  styleUrls: ['./News.component.scss']
})
export class NewsComponent implements OnInit {

  news : any[];
  search_value = "";

  constructor(private newsService : NewsService, private searchService : NbSearchService) {
    this.searchService.onSearchSubmit().subscribe((data: any) => {
      this.search_value = data.term;
    })

    newsService.getNews().subscribe((data : any[]) => {
      this.news = data;
    })
  }

  resetFilter(){
    this.search_value = "";
  }

  ngOnInit() {
  }

}
