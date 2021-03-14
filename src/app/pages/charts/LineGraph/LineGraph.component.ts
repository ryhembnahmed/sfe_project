import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'line-graph',
  templateUrl: './LineGraph.component.html',
  styleUrls: ['./LineGraph.component.scss']
})
export class LineGraphComponent implements OnInit {
  graph_title = "Line Plot"
  plot_type = 1; // 1Echart 2ChartJS

  plot_data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        name: 'Line 1',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        name: 'Line 2',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
      {
        name: 'Line 3',
        data: [18, 48, 77, 9, 100, 27, 40],
      }
    ]
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
