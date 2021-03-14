import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'eradar-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class ERadarChartComponent implements AfterViewInit, OnDestroy {
  @Input() dataplot: {};

  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) { }

  getRandomColor() {
    return "#" + (Math.floor(Math.random() * 16777215).toString(16));
  }

  ngAfterViewInit() {
    console.log(this.dataplot);

    let colorsGenerated = []
    let indicatorGenerated = []
    let seriesGenerated = []
    let legendsGenerated = []

    
    this.dataplot["datasets"].forEach(dataset => {
      seriesGenerated.push(
        {
          value: dataset['data'],
          name: dataset["legend"]
        }
      );
      colorsGenerated.push(this.getRandomColor());
      legendsGenerated.push(dataset["legend"]);
    });

    for (let i = 0; i < this.dataplot["labels"].length; i++) {
      let currentMax = this.dataplot["max"][i];
      let currentLabel = this.dataplot["labels"][i];
      indicatorGenerated.push({ name: currentLabel, max: currentMax });
    }

   

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: colorsGenerated,
        tooltip: {},
        legend: {
          data: legendsGenerated,
          textStyle: {
            color: echarts.textColor,
          },
        },
        radar: {
          name: {
            textStyle: {
              color: echarts.textColor,
            },
          },
          indicator: indicatorGenerated,
          splitArea: {
            areaStyle: {
              color: 'transparent',
            },
          },
        },
        series: [
          {
            name: '',
            type: 'radar',
            data: seriesGenerated,
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
