import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ebar-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EbarChartComponent implements AfterViewInit, OnDestroy {
  @Input() dataplot: {};

  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
  }

  getRandomColor(){
    return "#"+(Math.floor(Math.random()*16777215).toString(16));
  }

  ngAfterViewInit() {
    
    let seriesGenerated = []
    let colorsGenerated = []
    this.dataplot["datasets"].forEach(dataset => {
      seriesGenerated.push(
        {
          name: dataset["title"],
          type: 'bar',
          data: dataset["data"],
        }
      );
      colorsGenerated.push(this.getRandomColor())
    });

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      

      this.options = {
        //9 colors --> 20 color
        color: colorsGenerated,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
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
            type: 'value',
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
        series: seriesGenerated,
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
