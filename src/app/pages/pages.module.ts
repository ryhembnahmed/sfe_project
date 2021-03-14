import { GridstackModule } from '@libria/gridstack';
import { LineGraphComponent } from './charts/LineGraph/LineGraph.component';
import { RadarGraphComponent } from './charts/RadarGraph/RadarGraph.component';
import { PieGraphComponent } from './charts/PieGraph/PieGraph.component';
import { BarGraphComponent } from './charts/BarGraph/BarGraph.component';
import { D3PieAdvancedComponent } from './charts/d3pie-advanced.component';
import { D3PolarComponent } from './charts/d3polar.component';
import { D3PieComponent } from './charts/d3pie.component';
import { D3AreaStackComponent } from './charts/d3area.component';
import { D3BarComponent } from './charts/d3bar.component';
import { D3LineComponent } from './charts/d3line.component';
import { EAreaStackChartComponent } from './charts/eareachart.component';
import { ExaxisChartComponent } from './charts/exaxis.component';
import { ElineChartComponent } from './charts/elinechart.component';
import { ERadarChartComponent } from './charts/eradar.component';
import { EbarAnimationChartComponent } from './charts/ebar-animation.component';
import { EbarChartComponent } from './charts/ebarchart.component';
import { EpieChartComponent } from './charts/epiechart.component';
import { HorBarChartComponent } from './charts/horbar.component';
import { XaxisChartComponent } from './charts/xaxis.component';
import { LineChartComponent } from './charts/linechart.component';
import { RadarChartComponent } from './charts/radarchart.component';
import { PieChartComponent } from './charts/piechart.component';
import { HomeComponent } from './home/home.component';
import { TesttComponent } from './testt/testt.component';
import { BarChartComponent } from './charts/barchart.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NbButtonGroupModule, NbCardModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';




const chartsComponents = [
  BarChartComponent,
  PieChartComponent,
  RadarChartComponent,
  LineChartComponent,
  XaxisChartComponent,
  HorBarChartComponent,
  EpieChartComponent,
  EbarChartComponent,
  EbarAnimationChartComponent,
  ERadarChartComponent,
  ElineChartComponent,
  ExaxisChartComponent,
  EAreaStackChartComponent,
  D3LineComponent,
  D3BarComponent,
  D3AreaStackComponent,
  D3PieComponent,
  D3PolarComponent,
  D3PieAdvancedComponent,

  //genericChartsComponent
  BarGraphComponent,
  PieGraphComponent,
  RadarGraphComponent,
  LineGraphComponent,
];

const projectComponents = [
  TesttComponent, HomeComponent
]

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    HttpClientModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbCardModule,
    NbButtonGroupModule,
    GridstackModule.forRoot(),
  ],
  declarations: [
    PagesComponent, ...projectComponents, ...chartsComponents, 
  ],
})
export class PagesModule {
}
