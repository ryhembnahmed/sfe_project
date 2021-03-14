import { Router } from '@angular/router';
import { DataVisualizationService } from './../services/dataVisualization.service';
import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dashboards : any[];
  search_value = "";

  constructor(private dataService : DataVisualizationService, private searchService : NbSearchService, private _router: Router) {
    this.searchService.onSearchSubmit().subscribe((data: any) => {
      this.search_value = data.term;
    })

    dataService.getDashbords().subscribe((data : any[]) => {
      this.dashboards = data;
    })
  }

  resetFilter(){
    this.search_value = "";
  }


  ngOnInit() {
  }

  goToDashboard(dashboard_id){
    console.log(dashboard_id)
    this._router.navigate(['/pages/dashboard', dashboard_id]);
  }

}
