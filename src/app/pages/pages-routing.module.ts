import { ViewDashboardComponent } from './viewDashboard/viewDashboard.component';
import { NewsComponent } from './News/News.component';
import { AddDashboardComponent } from './addDashboard/addDashboard.component';
import { TesttComponent } from './testt/testt.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  {
    path: 'news',
    component:  NewsComponent,
  },
  {
    path: 'dashboards',
    component:  HomeComponent,
  },
  {
    path: 'add',
    component: AddDashboardComponent,
  },
  {
    path: 'test',
    component: TesttComponent,
  },
  {
    path: 'dashboard/:id',
    component: ViewDashboardComponent,
  },
  
  /* Widgets goes here */
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full',
  },    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
