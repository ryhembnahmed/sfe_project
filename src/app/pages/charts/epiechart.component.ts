import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'epie-chart',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EpieChartComponent implements AfterViewInit, OnDestroy {
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
    
    for(let i =0; i< this.dataplot["labels"].length; i++){
      let currentData = this.dataplot["dataset"]["data"][i];
      let currentLabel = this.dataplot["labels"][i];
      seriesGenerated.push({ value: currentData, name: currentLabel });
      colorsGenerated.push(this.getRandomColor())
    }

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: colorsGenerated,
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.dataplot["labels"],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: this.dataplot["dataset"]["title"],
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data:seriesGenerated,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
