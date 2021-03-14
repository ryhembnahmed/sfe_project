import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewDashboard',
  templateUrl: './viewDashboard.component.html',
  styleUrls: ['./viewDashboard.component.scss']
})
export class ViewDashboardComponent implements OnInit {

  dashboard_id : number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.dashboard_id = +params['id'];
    });
  }

}
