import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pie-graph',
  templateUrl: './PieGraph.component.html',
  styleUrls: ['./PieGraph.component.scss']
})
export class PieGraphComponent implements OnInit {

  graph_title = "Pie Plot"

  plot_type = 1; // 1Echart 2ChartJS

  plot_data = {
    labels: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
    dataset:
    {
      title: "Countries",
      data: [335, 310, 234, 135, 1548]
    }

  }


  constructor() { }

  ngOnInit() {
  }

  selectEchart() {
    this.plot_type = 1;
  }

  selectChartJS() {
    this.plot_type = 2;
  }
}
