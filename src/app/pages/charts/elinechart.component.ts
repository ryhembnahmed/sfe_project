import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'eline-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class ElineChartComponent implements AfterViewInit, OnDestroy {
  @Input() dataplot: {};

  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  getRandomColor() {
    return "#" + (Math.floor(Math.random() * 16777215).toString(16));
  }

  ngAfterViewInit() {
    console.log(this.dataplot);
    
    let seriesGenerated = []
    let colorsGenerated = []
    let legendsGenerated = []

    this.dataplot["datasets"].forEach(dataset => {
      seriesGenerated.push(
        {
          name: dataset["name"],
          type: 'line',
          data: dataset["data"],
        }
      );
      colorsGenerated.push(this.getRandomColor())
      legendsGenerated.push(dataset["name"]);
    });

    
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: colorsGenerated,
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        legend: {
          left: 'left',
          data: legendsGenerated,
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: 'category',
            data: this.dataplot["labels"],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'log',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        series: seriesGenerated,
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
