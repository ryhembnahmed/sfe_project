import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'radar-chart',
  template: `
    <chart type="radar" [data]="data" [options]="options"></chart>
  `,
})
export class RadarChartComponent implements OnDestroy, OnInit {
  @Input() dataplot: {};

  options: any;
  data: {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {}

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
          label: dataset["legend"],
          borderColor: this.getRandomColor(),
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
        responsive: true,
        maintainAspectRatio: true,
        scaleFontColor: 'white',
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scale: {
          pointLabels: {
            fontSize: 14,
            fontColor: chartjs.textColor,
          },
          gridLines: {
            color: chartjs.axisLineColor,
          },
          angleLines: {
            color: chartjs.axisLineColor,
          },
        },
      };
    });
  }


  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}