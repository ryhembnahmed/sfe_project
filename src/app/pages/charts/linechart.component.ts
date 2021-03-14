import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'line-chart',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class LineChartComponent implements OnDestroy, OnInit{
  @Input() dataplot: {};
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  getRandomColor() {
    return "#" + (Math.floor(Math.random() * 16777215).toString(16));
  }

  ngOnInit(){
    console.log(this.dataplot);
    let seriesGenerated = []

    this.dataplot["datasets"].forEach(dataset => {
      seriesGenerated.push(
        {
          data: dataset["data"],
          label: dataset["name"],
          borderColor: this.getRandomColor(),
        }
      );
    });
    console.log(seriesGenerated)
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: this.dataplot["labels"],
        datasets: seriesGenerated,
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
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
