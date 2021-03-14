import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bar-graph',
  templateUrl: './BarGraph.component.html',
  styleUrls: ['./BarGraph.component.scss']
})
export class BarGraphComponent implements OnInit {

  graph_title = "Bar Plot"

  plot_type = 1; // 1Echart 2ChartJS
  
  //Bar Plot Format Data
  plot_data = {
    labels : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets : [
      {
        title : "Score",
        data : [10, 52, 200, 334, 390, 330, 220]
      },
      {
        title: 'Fitness',
        data: [1, 52, 5, 334, 390, 30, 40],
      },
      {
        title: 'Ryhem',
        data: [1, 100, 5, 600, 50, 30, 100]
      }
    ]
  }
  
  constructor() { }

  ngOnInit() {
  }

  selectEchart(){
    this.plot_type = 1;
  }

  selectChartJS(){
    this.plot_type = 2;
  }


}
