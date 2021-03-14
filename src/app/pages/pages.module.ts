import { ViewDashboardComponent } from './viewDashboard/viewDashboard.component';
import { NewsComponent } from './News/News.component';
import { AddDashboardComponent } from './addDashboard/addDashboard.component';
import { GridstackModule } from '@libria/gridstack';
import { LineGraphComponent } from './charts/LineGraph/LineGraph.component';
import { RadarGraphComponent } from './charts/RadarGraph/RadarGraph.component';
import { PieGraphComponent } from './charts/PieGraph/PieGraph.component';
import { BarGraphComponent } from './charts/BarGraph/BarGraph.component';
import { ElineChartComponent } from './charts/elinechart.component';
import { ERadarChartComponent } from './charts/eradar.component';
import { EbarChartComponent } from './charts/ebarchart.component';
import { EpieChartComponent } from './charts/epiechart.component';
import { HorBarChartComponent } from './charts/horbar.component';
import { LineChartComponent } from './charts/linechart.component';
import { RadarChartComponent } from './charts/radarchart.component';
import { PieChartComponent } from './charts/piechart.component';
import { HomeComponent } from './home/home.component';
import { TesttComponent } from './testt/testt.component';
import { BarChartComponent } from './charts/barchart.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

import { ChartModule } from 'angular2-chartjs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';




const chartsComponents = [
  BarChartComponent,
  PieChartComponent,
  RadarChartComponent,
  LineChartComponent,
  HorBarChartComponent,
  EpieChartComponent,
  EbarChartComponent,
  ERadarChartComponent,
  ElineChartComponent,

  //genericChartsComponent
  BarGraphComponent,
  PieGraphComponent,
  RadarGraphComponent,
  LineGraphComponent,
];

const projectComponents = [
  TesttComponent, HomeComponent, AddDashboardComponent, NewsComponent, ViewDashboardComponent
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
    NbButtonModule,
    Ng2SearchPipeModule,
    NbIconModule,
    FormsModule,
    NbInputModule,
    GridstackModule.forRoot(),
  ],
  declarations: [
    PagesComponent, ...projectComponents, ...chartsComponents, 
  ],
})
export class PagesModule {
}
