import { TesttComponent } from './testt/testt.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'home',
    component:  HomeComponent,
  },
  {
    path: 'test',
    component: TesttComponent,
  },
  
  /* Widgets goes here */
  {
    path: '',
    redirectTo: 'home',
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
