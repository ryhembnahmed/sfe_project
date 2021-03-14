import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataVisualizationService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private http : HttpClient) { }

  public getDashbords(){
    return this.http.get(this.REST_API_SERVER+"/dashboards");
  }

  public postDashboard(dashboard){
    return this.http.post(this.REST_API_SERVER+"/dashboards", dashboard)
  }

  public getWidgets(){
    return this.http.get(this.REST_API_SERVER+"/widgets");
  }

  public getInsights(){
    return this.http.get(this.REST_API_SERVER+"/insights");
  }

}
