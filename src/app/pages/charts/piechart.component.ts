import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'pie-chart',
  template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,
})
export class PieChartComponent implements OnDestroy, OnInit {
  @Input() dataplot: {};
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  getRandomColor(){
    return "#"+(Math.floor(Math.random()*16777215).toString(16));
  }

  ngOnInit(){
    let colorsGenerated = []
    this.dataplot["dataset"]["data"].forEach(dataset => {
      colorsGenerated.push(this.getRandomColor())
    });

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      
      this.data = {
        labels: this.dataplot["labels"],
        datasets: [{
          data: this.dataplot["dataset"]["data"],
          backgroundColor: colorsGenerated,
        }]
      };

      this.options = {
        maintainAspectRatio: true,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
