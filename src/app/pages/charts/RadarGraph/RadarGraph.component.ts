import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'radar-graph',
  templateUrl: './RadarGraph.component.html',
  styleUrls: ['./RadarGraph.component.scss']
})
export class RadarGraphComponent implements OnInit {

  graph_title = "Radar Plot"

  plot_type = 1; // 1Echart 2ChartJS

  plot_data = {
    labels: ['Sales', 'Administration', 'Information Techology', 'Customer Support', 'Development', 'Marketing'],
    max  : [],

    datasets: [
      {
        legend: 'Allocated Budget',
        data: [24300, 10000, 28000, 35000, 50000, 19000]
      },
      {
        legend: 'Actual Spending',
        data: [25000, 14000, 28000, 31000, 42000, 21000]
      }
    ]

  }


  getMaxvalues(datasets){
    let maxitems = []

    for(let i=0; i<datasets[0]["data"].length; i++){
      
      let max = -900000
      datasets.forEach(element => {
        if (element["data"][i] > max){
          max = element["data"][i];
        }
      });

      maxitems.push(max);
    }

    return maxitems;
  }

  constructor() { }

  ngOnInit() {
    this.plot_data.max = this.getMaxvalues(this.plot_data.datasets);
  }

  selectEchart() {
    this.plot_type = 1;
  }

  selectChartJS() {
    this.plot_type = 2;
  }

}
