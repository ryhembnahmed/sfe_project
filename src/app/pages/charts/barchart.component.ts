import { Component, Input, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'bar-chart',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class BarChartComponent implements OnInit, OnDestroy {
  data : any;
  @Input() dataplot: {};
  options: any;
  themeSubscription: any;

  getRandomColor(){
    return "#"+(Math.floor(Math.random()*16777215).toString(16));
  }
  
  

  constructor(private theme: NbThemeService) {
    
  }

  ngOnInit(){
    let seriesGenerated = []
    this.dataplot["datasets"].forEach(dataset => {
      seriesGenerated.push(
        {
          label: dataset["title"],
          data: dataset["data"],
          backgroundColor: this.getRandomColor()
        }
      );
      
    });
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: this.dataplot["labels"],
        datasets: seriesGenerated,
      };

      this.options = {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
