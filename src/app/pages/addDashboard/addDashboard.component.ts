import { Router } from '@angular/router';
import { DataVisualizationService } from './../services/dataVisualization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addDashboard',
  templateUrl: './addDashboard.component.html',
  styleUrls: ['./addDashboard.component.scss']
})
export class AddDashboardComponent implements OnInit {

  newDashboard = {
    name : "",
    description : ""
  }

  constructor(private dataService : DataVisualizationService, private _router: Router) { }

  ngOnInit() {
  }

  saveDashboard(){
    this.dataService.postDashboard(this.newDashboard).subscribe(data => {
      console.log('saved');
      this._router.navigate(['/pages/dashboards']);
    })
  }

}
